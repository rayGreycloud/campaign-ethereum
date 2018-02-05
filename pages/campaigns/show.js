import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
// Using uppercase to avoid collision plus it's quasi-constructor function 
import Campaign from '../../ethereum/campaign';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    // Get specific campaign instance
    const campaign = Campaign(props.query.address);
    // Returns array-like object
    const details = await campaign.methods.getDetails().call();

    // Details translation layer
    return { 
      minimumContribution: details[0],
      balance: details[1],
      requestsCount: details[2],
      approversCount: details[3],
      manager: details[4]
    };
  }
  
  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        
        
      </Layout>

    );
  }
}

export default CampaignShow;
