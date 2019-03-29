const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const json = require('../build/contracts/MyContract.json');
const utils = require('ethereumjs-util');

let accounts;
let contract;
let manager;
let shaRandomNumber;
const interface = json['abi'];
const bytecode = json['bytecode'];

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    manager = accounts[0];
    contract = await new web3.eth.Contract(interface)
        .deploy({ data: bytecode })
        .send({ from: manager, gas: '500000'})
});

describe('MyContract', () => {
    it('deploys a contract', async () => {
        const contractManager = await contract.methods.owner().call();
        assert.equal(manager, contractManager, "The owner is the one who launches the smart contract.");
    });

});
