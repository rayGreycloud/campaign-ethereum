const assert = require('assert');
const fs = require('fs-extra');
const path = require('path');

const { readAddressFile, writeAddressFile } = require('../ethereum/helper');

describe('Helper functions', () => {
  // Set contract address for tests  
  const address = '0x7BE92De6928F78693597F9E87f0e6638dcCB4b99';

  beforeEach(() => {
    // Delete any pre-existing file
    fs.remove('./ethereum/contractDeployAddress.txt');      
  });

  it('writeAddressFile should save address to text file', () => {
    // Call function with test address
    writeAddressFile(address);
    // Check if file exists
    fs.exists('./ethereum/contractDeployAddress.txt', exists => {
      // Pass in boolean returned by fs.exists
      assert(exists); 
    });
  });
  
  it('readAddressFile should return contract address', async () => {
    // Create file 
    const filePath = path.resolve(__dirname, '..', 'ethereum/contractDeployAddress.txt');
    await fs.writeFileSync(filePath, address);

    // Read file 
    const readAddress = readAddressFile();
    // Compare 
    assert.equal(readAddress, address);
  });
  
  after(() => {
    fs.remove('./ethereum/contractDeployAddress.txt');
  });
});