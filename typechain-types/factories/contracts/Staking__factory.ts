/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Staking, StakingInterface } from "../../contracts/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenPair_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "rewardToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "votingAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "whitelistHash_",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessForbiden",
    type: "error",
  },
  {
    inputs: [],
    name: "ActiveVotingExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TokensFreezed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroRewards",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "DAO_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freezePeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getStakeData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "lpAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "startTime",
            type: "uint32",
          },
        ],
        internalType: "struct Staking.Stake",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPercent",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "freezePeriod_",
        type: "uint32",
      },
    ],
    name: "setFreezePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "rewardPercent_",
        type: "uint32",
      },
    ],
    name: "setRewardPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "rewardPeriod_",
        type: "uint32",
      },
    ],
    name: "setRewardPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "whitelistHash_",
        type: "bytes32",
      },
    ],
    name: "setWhitelistHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260058054600160201b600160601b031916680300093a80000000001790553480156200002f57600080fd5b506040516200169d3803806200169d8339810160408190526200005291620001e1565b6200005f600033620000dc565b6200007a6000805160206200167d83398151915283620000dc565b620000966000805160206200167d83398151915260006200017d565b600180546001600160a01b03199081166001600160a01b03968716179091556002805482169486169490941790935560038054909316919093161790556006556200023b565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000179576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001383390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6001600160a01b0381168114620001de57600080fd5b50565b60008060008060808587031215620001f857600080fd5b84516200020581620001c8565b60208601519094506200021881620001c8565b60408601519093506200022b81620001c8565b6060959095015193969295505050565b611432806200024b6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063845afce9116100cd578063d030205111610081578063da66d4dc11610066578063da66d4dc146102f4578063e88dc5b71461032f578063e9c265181461034557600080fd5b8063d0302051146102c7578063d547741f146102e157600080fd5b8063a217fddf116100b2578063a217fddf146102a4578063a4eb3aaf146102ac578063c31fd482146102bf57600080fd5b8063845afce91461025a57806391d148541461026d57600080fd5b80632def662011610124578063318d802b11610109578063318d802b1461022c57806336568abe1461023f5780634e71d92d1461025257600080fd5b80632def6620146102115780632f2ff15d1461021957600080fd5b80631093aa6c116101555780631093aa6c146101b85780631b60a072146101cd578063248a9ca3146101e057600080fd5b806301ffc9a7146101715780630a3cb66314610199575b600080fd5b61018461017f366004611063565b61036c565b60405190151581526020015b60405180910390f35b60055463ffffffff165b60405163ffffffff9091168152602001610190565b6101cb6101c63660046110b7565b610405565b005b6101cb6101db3660046110d4565b61044c565b6102036101ee3660046110d4565b60009081526020819052604090206001015490565b604051908152602001610190565b6101cb61047c565b6101cb610227366004611109565b6106a6565b6101cb61023a3660046110b7565b6106d0565b6101cb61024d366004611109565b61070c565b6101cb61079d565b6101cb6102683660046110b7565b6108e2565b61018461027b366004611109565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610203600081565b6101cb6102ba366004611135565b610916565b600654610203565b60055468010000000000000000900463ffffffff166101a3565b6101cb6102ef366004611109565b610b0d565b6103076103023660046111b4565b610b32565b6040805182518152602080840151908201529181015163ffffffff1690820152606001610190565b600554640100000000900463ffffffff166101a3565b6102037f3b5d4cc60d3ec3516ee8ae083bd60934f6eb2a6c54b1229985c41bfb092b260381565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806103ff57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f3b5d4cc60d3ec3516ee8ae083bd60934f6eb2a6c54b1229985c41bfb092b260361042f81610ba4565b506005805463ffffffff191663ffffffff92909216919091179055565b7f3b5d4cc60d3ec3516ee8ae083bd60934f6eb2a6c54b1229985c41bfb092b260361047681610ba4565b50600655565b600554336000908152600460205260409020600201546104a59163ffffffff90811691166111e5565b63ffffffff164210156104e4576040517f7531ed2d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003546040517fbcf489b90000000000000000000000000000000000000000000000000000000081523360048201526000916001600160a01b03169063bcf489b990602401602060405180830381865afa158015610546573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056a919061120d565b90508063ffffffff164210156105ac576040517fac6853da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b533610bb1565b33600090815260046020526040812060010180549091906105d790849061122a565b90915550503360008181526004602081905260408083208054939055600154905163a9059cbb60e01b8152918201939093526024810182905290916001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190611242565b5060408051338152602081018390527f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75910160405180910390a15050565b6000828152602081905260409020600101546106c181610ba4565b6106cb8383610c55565b505050565b60006106db81610ba4565b506005805463ffffffff90921668010000000000000000026bffffffff000000000000000019909216919091179055565b6001600160a01b038116331461078f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6107998282610cf3565b5050565b60006107a833610bb1565b336000908152600460205260409020600101546107c5919061122a565b905080600003610801576040517f899aaa9d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600081815260046020819052604080832060018101939093556002928301805463ffffffff19164263ffffffff161790559154915163a9059cbb60e01b815290810192909252602482018390526001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a59190611242565b5060408051338152602081018390527fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a910160405180910390a150565b60006108ed81610ba4565b506005805463ffffffff9092166401000000000267ffffffff0000000019909216919091179055565b61098b828280806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506006546040516bffffffffffffffffffffffff193360601b166020820152909250603401905060405160208183030381529060405280519060200120610d72565b6109c1576040517f50393dd600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018590526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610a31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a559190611242565b50610a5f33610bb1565b3360009081526004602052604081206001018054909190610a8190849061122a565b90915550503360009081526004602052604081208054859290610aa590849061122a565b909155505033600081815260046020908152604091829020600201805463ffffffff19164263ffffffff16179055815192835282018590527f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d910160405180910390a1505050565b600082815260208190526040902060010154610b2881610ba4565b6106cb8383610cf3565b610b5c60405180606001604052806000815260200160008152602001600063ffffffff1681525090565b506001600160a01b03166000908152600460209081526040918290208251606081018452815481526001820154928101929092526002015463ffffffff169181019190915290565b610bae8133610d88565b50565b6005546001600160a01b0382166000908152600460205260408120600201549091829163ffffffff640100000000909204821691610bf0911642611264565b610bfa919061127b565b6005546001600160a01b0385166000908152600460205260409020549192506064916801000000000000000090910463ffffffff1690610c3a908461129d565b610c44919061129d565b610c4e919061127b565b9392505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610799576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610caf3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610799576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600082610d7f8584610e06565b14949350505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661079957610dc4816001600160a01b03166014610e53565b610dcf836020610e53565b604051602001610de09291906112ec565b60408051601f198184030181529082905262461bcd60e51b82526107869160040161136d565b600081815b8451811015610e4b57610e3782868381518110610e2a57610e2a6113a0565b6020026020010151611034565b915080610e43816113b6565b915050610e0b565b509392505050565b60606000610e6283600261129d565b610e6d90600261122a565b67ffffffffffffffff811115610e8557610e856113cf565b6040519080825280601f01601f191660200182016040528015610eaf576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610ee657610ee66113a0565b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610f3157610f316113a0565b60200101906001600160f81b031916908160001a9053506000610f5584600261129d565b610f6090600161122a565b90505b6001811115610fe5577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610fa157610fa16113a0565b1a60f81b828281518110610fb757610fb76113a0565b60200101906001600160f81b031916908160001a90535060049490941c93610fde816113e5565b9050610f63565b508315610c4e5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610786565b6000818310611050576000828152602084905260409020610c4e565b6000838152602083905260409020610c4e565b60006020828403121561107557600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610c4e57600080fd5b63ffffffff81168114610bae57600080fd5b6000602082840312156110c957600080fd5b8135610c4e816110a5565b6000602082840312156110e657600080fd5b5035919050565b80356001600160a01b038116811461110457600080fd5b919050565b6000806040838503121561111c57600080fd5b8235915061112c602084016110ed565b90509250929050565b60008060006040848603121561114a57600080fd5b83359250602084013567ffffffffffffffff8082111561116957600080fd5b818601915086601f83011261117d57600080fd5b81358181111561118c57600080fd5b8760208260051b85010111156111a157600080fd5b6020830194508093505050509250925092565b6000602082840312156111c657600080fd5b610c4e826110ed565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff808316818516808303821115611204576112046111cf565b01949350505050565b60006020828403121561121f57600080fd5b8151610c4e816110a5565b6000821982111561123d5761123d6111cf565b500190565b60006020828403121561125457600080fd5b81518015158114610c4e57600080fd5b600082821015611276576112766111cf565b500390565b60008261129857634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156112b7576112b76111cf565b500290565b60005b838110156112d75781810151838201526020016112bf565b838111156112e6576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516113248160178501602088016112bc565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516113618160288401602088016112bc565b01602801949350505050565b602081526000825180602084015261138c8160408501602087016112bc565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b6000600182016113c8576113c86111cf565b5060010190565b634e487b7160e01b600052604160045260246000fd5b6000816113f4576113f46111cf565b50600019019056fea26469706673582212208f5114f5aa605b0669e112c46cdecbe2c2e7037a0f88708509a62a9dd4c82de764736f6c634300080d00333b5d4cc60d3ec3516ee8ae083bd60934f6eb2a6c54b1229985c41bfb092b2603";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    tokenPair_: PromiseOrValue<string>,
    rewardToken_: PromiseOrValue<string>,
    votingAddress: PromiseOrValue<string>,
    whitelistHash_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(
      tokenPair_,
      rewardToken_,
      votingAddress,
      whitelistHash_,
      overrides || {}
    ) as Promise<Staking>;
  }
  override getDeployTransaction(
    tokenPair_: PromiseOrValue<string>,
    rewardToken_: PromiseOrValue<string>,
    votingAddress: PromiseOrValue<string>,
    whitelistHash_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenPair_,
      rewardToken_,
      votingAddress,
      whitelistHash_,
      overrides || {}
    );
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
