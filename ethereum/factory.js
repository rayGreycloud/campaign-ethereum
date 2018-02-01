import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x251b0af24647f7e547719A348762F2C9df7f8D7F'
);

export default instance;
