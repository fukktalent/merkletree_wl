import { keccak256 } from "ethers/lib/utils";
import { MerkleTree } from "merkletreejs";

export const getTree = async (addresses: string[]) => {
    const leaves = addresses.map(address => keccak256(address));
    return new MerkleTree(leaves, keccak256, { sortPairs: true });
};