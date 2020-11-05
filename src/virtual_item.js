import web3 from './web3';

const address = '0x65Bb36cB9b681926069B457d98f0a7fEb5997105'; 

const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "gameName",
				"type": "string"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "itemIndex",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "add_to_pool",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "id",
				"type": "string"
			}
		],
		"name": "moneyTransfer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumItem",
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "item_list",
		"outputs": [
			{
				"name": "gameName",
				"type": "string"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "itemIndex",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);