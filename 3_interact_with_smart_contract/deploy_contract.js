// read some real life data
var Web3 = require('web3');

// mainnet and testnet infura
// let url = "https://mainnet.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49";
// let url = "https://ropsten.infura.io/v3/abbe691d210c470bbb9e2956e2f82c49"

// use local ganache blockchain
// let url = "http://127.0.0.1:7545"

// need to use local geth client hosted
// geth node need to be synced before could use for deploy
let url = "http://127.0.0.1:8545"

// use personal to unlock the account first

// create Web3 object with provider input
let web3 = new Web3(url)

let abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidates",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "voteCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "voters",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "candidateCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "name": "voted",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

let contract = new web3.eth.Contract(abi);

// console.log(contract)

contract.deploy({
  data: '0x608060405234801561001057600080fd5b5061005e6040805190810160405280600b81526020017f63616e64696461746520310000000000000000000000000000000000000000008152506100b0640100000000026401000000009004565b6100ab6040805190810160405280600b81526020017f63616e64696461746520320000000000000000000000000000000000000000008152506100b0640100000000026401000000009004565b6101cf565b6001806000828254019250508190555060606040519081016040528060015481526020018281526020016000815250600080600154815260200190815260200160002060008201518160000155602082015181600101908051906020019061011992919061012a565b506040820151816002015590505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061016b57805160ff1916838001178555610199565b82800160010185558215610199579182015b8281111561019857825182559160200191906001019061017d565b5b5090506101a691906101aa565b5090565b6101cc91905b808211156101c85760008160009055506001016101b0565b5090565b90565b6104f6806101de6000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f146100675780633477ee2e14610094578063a3ec138d14610148578063a9a981a3146101a3575b600080fd5b34801561007357600080fd5b50610092600480360381019080803590602001909291905050506101ce565b005b3480156100a057600080fd5b506100bf600480360381019080803590602001909291905050506103e2565b6040518084815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561010b5780820151818401526020810190506100f0565b50505050905090810190601f1680156101385780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561015457600080fd5b50610189600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104a4565b604051808215151515815260200191505060405180910390f35b3480156101af57600080fd5b506101b86104c4565b6040518082815260200191505060405180910390f35b600154811115151561026e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001807f63616e6469646174652069642073686f756c6420736d616c6c6572206f72206581526020017f7175616c20746f2063616e64696461746520636f756e7400000000000000000081525060400191505060405180910390fd5b60001515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f766f746572206e65656420746f206e6f742079657420766f746500000000000081525060200191505060405180910390fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008083815260200190815260200160002060020160008282540192505081905550807f8fbb38ff86a5b319c33b22609be0afce04335d5db18c6bd100767e251d4028cc60405160405180910390a250565b6000602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b5050505050908060020154905083565b60026020528060005260406000206000915054906101000a900460ff1681565b600154815600a165627a7a723058203a3fcaafc5a3a39591728d563b2c87ee132dde1291d09adfbf80f74c91392eb40029',
  arguments:[]
})
.send({
  from: '0xc834efF8B3B5bb6dFA2E4469D4E0C415ADf63bf9',
  // from: '0x7C6753Efd8173D6d371080742B5B355E9849bb3B',
  gas: 900000,
  gasPrice: '30000000000000'
}, function(error, transactionHash){
  if (error){
    console.log(error)
  } else {
    console.log(transactionHash)
  }
});

