import react, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    
    return { campaigns };
  }
  
  render() {
    return (
      <div>
        <h1>Campaigns</h1>
        <p>{this.props.campaigns[0]}</p>
      </div>
    );
  }
}

export default CampaignIndex;
