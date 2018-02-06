import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    description: '',
    value: '',
    recipient: ''
  };
  
  static async getInitialProps(props) {
    const { address } = props.query;
    
    return { address };
  }
  
  render() {
    return (
      <Layout>
        <Form>
          <h3>Create a New Request</h3>
          <Form.Field>
            <label>Description</label>
            <Input 
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Amount in Ether</label>
            <Input 
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}            
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input 
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })}            
            />
          </Form.Field>
          
          <Button primary>Create Request</Button>
        </Form>
      </Layout>  
    );
  }
} 

export default RequestNew;
