import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { keccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import MerkleTree from "merkletreejs";

import { Voting, Staking, XXXToken, Voting__factory, Staking__factory, XXXToken__factory } from "../typechain-types";
import config from "./config";
import { getTree } from "./utils";

const { PERIOD_DURATION, MINIMUM_QUORUM } = config.VOTING;

describe("Voting", function () {
    let merkletree: MerkleTree;

    let owner: SignerWithAddress;
    let acc1: SignerWithAddress;
    let acc2: SignerWithAddress;
    let acc3: SignerWithAddress;
    let chairman: SignerWithAddress;

    let voting: Voting;

    let staking: Staking;

    let erc20: XXXToken;

    let votingCounter: number = 0;

    function getExampleProposal (isInvalid = false) {
        const iface = new ethers.utils.Interface([
            "function transferFrom(address from, address to, uint256 amount)"
        ]);

        const callData = iface.encodeFunctionData(
            "transferFrom", 
            [isInvalid ? acc3.address : acc1.address, acc2.address, 123]
        );
        const recipient = erc20.address;
        const description = "transfer from acc1 to acc2";

        return { callData, recipient, description };
    }

    before(async function() {
        [owner, acc1, acc2, acc3, chairman] = await ethers.getSigners();

        merkletree = await getTree([
            owner.address,
            acc1.address,
            acc2.address,
            acc3.address,
        ]);

        erc20 = await new XXXToken__factory(owner).deploy("Token XXX", "XXX");
        await erc20.deployed();

        voting = await new Voting__factory(owner).deploy(
            PERIOD_DURATION,
            MINIMUM_QUORUM,
            chairman.address
        );
        await voting.deployed();

        staking = await new Staking__factory(owner).deploy(
            erc20.address,
            erc20.address,
            voting.address,
            merkletree.getHexRoot(),
        );
        await staking.deployed();

        await voting.setStakingAddress(staking.address);

        await erc20.grantRole(
            ethers.utils.keccak256(ethers.utils.toUtf8Bytes("MINTER_BURNER_ROLE")), 
            owner.address
        );
        erc20.mint(owner.address, MINIMUM_QUORUM);
        erc20.mint(acc1.address, MINIMUM_QUORUM);
        erc20.mint(acc2.address, MINIMUM_QUORUM);
        erc20.mint(acc3.address, 1);

        await erc20.approve(staking.address, ethers.constants.MaxUint256);
        await erc20.connect(acc1).approve(staking.address, ethers.constants.MaxUint256);
        await erc20.connect(acc2).approve(staking.address, ethers.constants.MaxUint256);
        await erc20.connect(acc3).approve(staking.address, ethers.constants.MaxUint256);

        await staking.stake(
            MINIMUM_QUORUM / 2 + 1,
            merkletree.getHexProof(keccak256(owner.address))
        );
        await staking.connect(acc1).stake(
            MINIMUM_QUORUM / 2,
            merkletree.getHexProof(keccak256(acc1.address))
        );
        await staking.connect(acc2).stake(
            MINIMUM_QUORUM / 2 - 1,
            merkletree.getHexProof(keccak256(acc2.address))
        );
        await staking.connect(acc3).stake(
            1,
            merkletree.getHexProof(keccak256(acc3.address))
        );
    });

    it("Should correct deployed", async function() {
        expect(await voting.debatingPeriodDuration()).to.be.equal(PERIOD_DURATION);
        expect(await voting.minimumQuorum()).to.be.equal(MINIMUM_QUORUM);
        expect(await voting.proposalsCount()).to.be.equal(0);
    });

    describe("addProposal", function() {
        it("Should add proposal", async function() {
            const { callData, recipient, description } = getExampleProposal();
            const tx = await voting.connect(chairman).addProposal(callData, recipient, description);
            await expect(tx).to.emit(
                voting,
                "ProposalVotingStarted"
            ).withArgs(
                votingCounter,
                callData,
                recipient,
                description
            );

            const proposal = await voting.proposal(votingCounter);
            expect(proposal.callData).to.be.equal(callData);
            expect(proposal.recipient).to.be.equal(recipient);
            expect(proposal.description).to.be.equal(description);
            expect(proposal.votesFor).to.be.equal(0);
            expect(proposal.votesAgainst).to.be.equal(0);
            expect(await voting.proposalsCount()).to.be.equal(votingCounter + 1);
        });

        it("Should revert with access error", async function() {
            const { callData, recipient, description } = getExampleProposal();
            const tx = voting.connect(acc1).addProposal(callData, recipient, description);
            await expect(tx).to.be.revertedWith("AccessControl");
        });
    });

    describe("vote", function() {
        it("Should revert with InvalidProposal", async function() {
            const tx = voting.vote(votingCounter + 100, true);
            await expect(tx).to.be.revertedWith("InvalidProposal()");
        });

        it("Should add votes for proposal", async function() {
            await voting.vote(votingCounter, true);
            const proposal = await voting.proposal(votingCounter);
            expect(proposal.votesFor).to.be.equal(MINIMUM_QUORUM / 2 + 1);
            expect(proposal.votesAgainst).to.be.equal(0);
        });

        it("Should add votes against proposal", async function() {
            await voting.connect(acc1).vote(votingCounter, false);
            const proposal = await voting.proposal(votingCounter);
            expect(proposal.votesFor).to.be.equal(MINIMUM_QUORUM / 2 + 1);
            expect(proposal.votesAgainst).to.be.equal(MINIMUM_QUORUM / 2);
        });

        it("Should revert with InvalidProposal", async function() {
            const tx = voting.vote(votingCounter, true);
            await expect(tx).to.be.revertedWith("AlreadyVoted()");
        });

        it("Should revert with ZeroStaked", async function() {
            const tx = voting.connect(chairman).vote(votingCounter, true);
            await expect(tx).to.be.revertedWith("ZeroStaked()");
        });

        it("Should not update lastFinishDate", async function() {
            const { callData, recipient, description } = getExampleProposal();
            await voting.connect(chairman).addProposal(callData, recipient, description);
            votingCounter++;

            await voting.connect(acc3).vote(votingCounter, true);
            const lastFinishDate = (await voting.lastFinishDate(acc3.address));

            await voting.connect(acc3).vote(votingCounter - 1, true);
            const newLastFinishDate = (await voting.lastFinishDate(acc3.address));

            expect(lastFinishDate).to.be.equal(newLastFinishDate);
        });

        it("Should revert with NotActiveProposalTime", async function() {
            await ethers.provider.send("evm_increaseTime", [PERIOD_DURATION]);
            await ethers.provider.send("evm_mine", []);

            const tx = voting.vote(votingCounter, true);
            await expect(tx).to.be.revertedWith("NotActiveProposalTime()");
        });
    });

    describe("finishProposal", function() {
        before(async function() {
            const { callData, recipient, description } = getExampleProposal();
            await voting.connect(chairman).addProposal(callData, recipient, description);
            votingCounter++;


            await voting.vote(votingCounter, false);
            await voting.connect(acc1).vote(votingCounter, true);
        });

        it("Should revert with InvalidProposal", async function() {
            const tx = voting.finishProposal(99);
            await expect(tx).to.be.revertedWith("InvalidProposal()");
        });

        it("Should revert with StillActiveProposalTime", async function() {
            const tx = voting.finishProposal(votingCounter);
            await expect(tx).to.be.revertedWith("StillActiveProposalTime()");
        });

        it("Should finish voting and do accepted proposal", async function() {
            await erc20.connect(acc1).approve(voting.address, ethers.constants.MaxUint256);

            const tx = voting.finishProposal(votingCounter - 2);

            await expect(tx).to.emit(
                voting,
                "ProposalAccepted"
            ).withArgs(
                votingCounter - 2,
                MINIMUM_QUORUM / 2 + 1,
                MINIMUM_QUORUM / 2,
                ethers.utils.hexZeroPad(ethers.utils.hexlify(1), 32)
            )
            .and.to.emit(
                erc20,
                "Transfer"
            ).withArgs(
                acc1.address,
                acc2.address,
                123
            );
        });

        it("Should finish voting and decline proposal", async function() {
            await ethers.provider.send("evm_increaseTime", [PERIOD_DURATION]);
            await ethers.provider.send("evm_mine", []);

            const tx1 = voting.finishProposal(votingCounter - 1);
            await expect(tx1).to.emit(
                voting,
                "ProposalDeclined"
            ).withArgs(
                votingCounter - 1,
                1,
                0
            );

            const tx2 = voting.finishProposal(votingCounter);
            await expect(tx2).to.emit(
                voting,
                "ProposalDeclined"
            ).withArgs(
                votingCounter,
                MINIMUM_QUORUM / 2,
                MINIMUM_QUORUM / 2 + 1
            );
        });

        it("Should finish voting and decline proposal then invalid proposal", async function() {
            const { callData, recipient, description } = getExampleProposal(true);
            await voting.connect(chairman).addProposal(callData, recipient, description);
            votingCounter++;

            await voting.vote(votingCounter, true);
            await voting.connect(acc1).vote(votingCounter, false);

            await ethers.provider.send("evm_increaseTime", [PERIOD_DURATION]);
            await ethers.provider.send("evm_mine", []);

            const tx = voting.finishProposal(votingCounter);
            await expect(tx).to.emit(
                voting,
                "ProposalFailed"
            ).withArgs(votingCounter);
        });
    });
});
