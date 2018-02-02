import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class CampaignNew extends Component {
  state = {
    minimumContribution: ''
  };
  
  render() {
    return (
      <Layout>
        <h3>Create a new Campaign</h3>
        
        <Form>
          <Form.Field>
            <label>Set Minimum Contribution</label>
            <Input 
              label='wei' 
              labelPosition='right'
              placeholder='Enter minimum contribution required in wei'
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({ minimumContribution: event.target.value })}
            />
          </Form.Field>
          <Button primary>Create Campaign</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
