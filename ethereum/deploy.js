const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  // account mnemonic
  'minor current question flash mammal suffer trim sketch adult credit joke inmate',
  // specify network 
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

const web3 = new Web3(provider);

// Using function for async/await usage
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  
  console.log('Attempting to deploy contract...');
  
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed. Saving address file...');  
  
  fs.writeFile('contractDeploymentAddress.txt', result.options.address, (err) => {
    if (err) throw err;
    console.log('Address file has been saved.');
  });
  
};

deploy();