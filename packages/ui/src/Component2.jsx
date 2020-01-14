import React from 'react';

// eslint-disable-next-line react/prop-types
const Component2 = ({ name, children }) => (
  <div>
    <h1>
      This is a component.
      {name}
    </h1>
    {children}
  </div>
);

export default Component2;
