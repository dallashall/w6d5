import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';

const data = [
  {
    title: "Zero",
    content: "Zero is a number"
  },
  {
    title: "One",
    content: "One is the loneliest number"
  },
  {
    title: "Two",
    content: "Two, in love, can make it."
  }
]

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Section tabData={data} />, document.getElementById('gage'));
});
