/* eslint-disable no-console */
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { myfunc } from '@stuff/sdk';
import { sayHello } from './lib';
import Hello from './Hello';

console.log(sayHello('STuFF'));
console.log(myfunc('4'));
ReactDOM.render(<Hello name="STuFF" />, document.getElementById('foo'));
