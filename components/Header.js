import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
  return (
    <Menu style={{ marginTop: '1rem' }}>
      <Menu.Item>CrowdCoin</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
