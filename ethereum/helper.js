const path = require('path');
const fs = require('fs-extra');

const writeAddressFile = (address) => {
  const filePath = path.resolve(__dirname,'contractDeployAddress.txt');
  
  fs.writeFile(filePath, address, (err) => {
    if (err) throw err;
    console.log('Address file saved.');
  });  
}

const readAddressFile = () => {
  const filePath = path.resolve(__dirname,'contractDeployAddress.txt');
  
  const address = fs.readFileSync(filePath, "utf8");
  
  console.log('Address file read.');

  return address;  
}

module.exports = { writeAddressFile, readAddressFile };