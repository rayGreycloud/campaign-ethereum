import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>I'm a Header</h1>
        {props.children}
      <h1>I'm a Footer</h1>
    </div>
  );
};
