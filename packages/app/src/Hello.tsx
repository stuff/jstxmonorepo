import React from 'react';

import { Component2 } from '@stuff/ui/foo';

type HelloProps = {
  name: string;
};

const Hello = ({ name }: HelloProps) => {
  return <Component2>{name} !!</Component2>;
};

export default Hello;
