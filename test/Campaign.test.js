const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  // deploy new factory
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });
    
  factory.setProvider(provider);
  
  // create campaign
  await factory.methods.createCampaign('10000000').send({
    from: accounts[0],
    gas: '1000000'
  });
  
  // get first item in deployed campaigns array using destructuring 
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  // get test instance of campaign 
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe('Campaigns', () => {
  it('should deploy a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
  
  
});
