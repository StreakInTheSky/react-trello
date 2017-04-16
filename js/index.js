require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

const title = "Should I buy an electric car?";
const lists = ["Pros", "Cons"];

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Board title={title} lists={lists} />, document.getElementById('app'))
);
