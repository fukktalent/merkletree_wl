/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { XXXToken, XXXTokenInterface } from "../../contracts/XXXToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
    name: "MINTER_BURNER_ROLE",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200184b3803806200184b83398101604081905262000034916200030d565b8151829082906200004d9060039060208501906200019a565b508051620000639060049060208401906200019a565b506200007591506000905033620000aa565b620000a27fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b360006200014f565b5050620003b3565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff166200014b5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff191660011790556200010a3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600082815260056020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b828054620001a89062000377565b90600052602060002090601f016020900481019282620001cc576000855562000217565b82601f10620001e757805160ff191683800117855562000217565b8280016001018555821562000217579182015b8281111562000217578251825591602001919060010190620001fa565b506200022592915062000229565b5090565b5b808211156200022557600081556001016200022a565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200026857600080fd5b81516001600160401b038082111562000285576200028562000240565b604051601f8301601f19908116603f01168101908282118183101715620002b057620002b062000240565b81604052838152602092508683858801011115620002cd57600080fd5b600091505b83821015620002f15785820183015181830184015290820190620002d2565b83821115620003035760008385830101525b9695505050505050565b600080604083850312156200032157600080fd5b82516001600160401b03808211156200033957600080fd5b620003478683870162000256565b935060208501519150808211156200035e57600080fd5b506200036d8582860162000256565b9150509250929050565b600181811c908216806200038c57607f821691505b602082108103620003ad57634e487b7160e01b600052602260045260246000fd5b50919050565b61148880620003c36000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806340c10f19116100d85780639dc29fac1161008c578063a9059cbb11610066578063a9059cbb14610330578063d547741f14610343578063dd62ed3e1461035657600080fd5b80639dc29fac14610302578063a217fddf14610315578063a457c2d71461031d57600080fd5b806372c32860116100bd57806372c328601461029a57806391d14854146102c157806395d89b41146102fa57600080fd5b806340c10f191461025e57806370a082311461027157600080fd5b8063248a9ca31161012f578063313ce56711610114578063313ce5671461022957806336568abe14610238578063395093511461024b57600080fd5b8063248a9ca3146101f15780632f2ff15d1461021457600080fd5b8063095ea7b311610160578063095ea7b3146101b957806318160ddd146101cc57806323b872dd146101de57600080fd5b806301ffc9a71461017c57806306fdde03146101a4575b600080fd5b61018f61018a366004611143565b61038f565b60405190151581526020015b60405180910390f35b6101ac610428565b60405161019b91906111b1565b61018f6101c7366004611200565b6104ba565b6002545b60405190815260200161019b565b61018f6101ec36600461122a565b6104d2565b6101d06101ff366004611266565b60009081526005602052604090206001015490565b61022761022236600461127f565b6104f6565b005b6040516012815260200161019b565b61022761024636600461127f565b610520565b61018f610259366004611200565b6105b1565b61022761026c366004611200565b6105f0565b6101d061027f3660046112ab565b6001600160a01b031660009081526020819052604090205490565b6101d07fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b381565b61018f6102cf36600461127f565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101ac610624565b610227610310366004611200565b610633565b6101d0600081565b61018f61032b366004611200565b610667565b61018f61033e366004611200565b610711565b61022761035136600461127f565b61071f565b6101d06103643660046112c6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061042257507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060038054610437906112f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610463906112f0565b80156104b05780601f10610485576101008083540402835291602001916104b0565b820191906000526020600020905b81548152906001019060200180831161049357829003601f168201915b5050505050905090565b6000336104c8818585610744565b5060019392505050565b6000336104e085828561089c565b6104eb85858561092e565b506001949350505050565b60008281526005602052604090206001015461051181610b45565b61051b8383610b52565b505050565b6001600160a01b03811633146105a35760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6105ad8282610bf4565b5050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104c890829086906105eb908790611340565b610744565b7fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b361061a81610b45565b61051b8383610c77565b606060048054610437906112f0565b7fcfd53186d792f1ec9d0679afc2dc3ffc86fc31fe1e0f342b838eb6c3eade62b361065d81610b45565b61051b8383610d56565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156107045760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161059a565b6104eb8286868403610744565b6000336104c881858561092e565b60008281526005602052604090206001015461073a81610b45565b61051b8383610bf4565b6001600160a01b0383166107bf5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b03821661083b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610928578181101561091b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161059a565b6109288484848403610744565b50505050565b6001600160a01b0383166109aa5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b038216610a265760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b03831660009081526020819052604090205481811015610ab55760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610aec908490611340565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b3891815260200190565b60405180910390a3610928565b610b4f8133610edb565b50565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff166105ad5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610bb03390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16156105ad5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610ccd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161059a565b8060026000828254610cdf9190611340565b90915550506001600160a01b03821660009081526020819052604081208054839290610d0c908490611340565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610dd25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b03821660009081526020819052604090205481811015610e615760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161059a565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610e90908490611358565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff166105ad57610f19816001600160a01b03166014610f5b565b610f24836020610f5b565b604051602001610f3592919061136f565b60408051601f198184030181529082905262461bcd60e51b825261059a916004016111b1565b60606000610f6a8360026113f0565b610f75906002611340565b67ffffffffffffffff811115610f8d57610f8d61140f565b6040519080825280601f01601f191660200182016040528015610fb7576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610fee57610fee611425565b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061103957611039611425565b60200101906001600160f81b031916908160001a905350600061105d8460026113f0565b611068906001611340565b90505b60018111156110ed577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106110a9576110a9611425565b1a60f81b8282815181106110bf576110bf611425565b60200101906001600160f81b031916908160001a90535060049490941c936110e68161143b565b905061106b565b50831561113c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161059a565b9392505050565b60006020828403121561115557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461113c57600080fd5b60005b838110156111a0578181015183820152602001611188565b838111156109285750506000910152565b60208152600082518060208401526111d0816040850160208701611185565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146111fb57600080fd5b919050565b6000806040838503121561121357600080fd5b61121c836111e4565b946020939093013593505050565b60008060006060848603121561123f57600080fd5b611248846111e4565b9250611256602085016111e4565b9150604084013590509250925092565b60006020828403121561127857600080fd5b5035919050565b6000806040838503121561129257600080fd5b823591506112a2602084016111e4565b90509250929050565b6000602082840312156112bd57600080fd5b61113c826111e4565b600080604083850312156112d957600080fd5b6112e2836111e4565b91506112a2602084016111e4565b600181811c9082168061130457607f821691505b60208210810361132457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113535761135361132a565b500190565b60008282101561136a5761136a61132a565b500390565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516113a7816017850160208801611185565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516113e4816028840160208801611185565b01602801949350505050565b600081600019048311821515161561140a5761140a61132a565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161144a5761144a61132a565b50600019019056fea2646970667358221220ec2f8682bf6cb9342b301a03e2e198a8d9d64d14074fb3bc610852a947ce266264736f6c634300080d0033";

type XXXTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XXXTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XXXToken__factory extends ContractFactory {
  constructor(...args: XXXTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<XXXToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<XXXToken>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): XXXToken {
    return super.attach(address) as XXXToken;
  }
  override connect(signer: Signer): XXXToken__factory {
    return super.connect(signer) as XXXToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XXXTokenInterface {
    return new utils.Interface(_abi) as XXXTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XXXToken {
    return new Contract(address, _abi, signerOrProvider) as XXXToken;
  }
}
