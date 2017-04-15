require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const title = "Ross's Super Board of Awesomeness";
const lists = ["Primary Qualities", "Secondary Qualities", "Tertiary Qualities"];

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Board title={title} lists={lists} />, document.getElementById('app'))
);
