import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

const { Cell, Row } = Table;

class RequestRow extends Component {
  render() {
    return (
      <Row>
        <Cell>1234567890ABCDE</Cell>
        <Cell>Buy Widgets</Cell>
        <Cell>0.011</Cell>
        <Cell>BobHashAddress</Cell>
        <Cell>1</Cell>
        <Cell>Approve</Cell>
        <Cell>Finalize</Cell>
      </Row>
    );
  }
}

export default RequestRow;
