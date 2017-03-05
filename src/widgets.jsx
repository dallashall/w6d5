import React from 'react';
import ReactDOM from 'react-dom';

import Section from './section';

const Panes = [
  { title: "Zero", content: "Zero is a number" },
  { title: "One", content: "One is the loneliest number" },
  { title: "Two", content: "Two, in love, can make it." }
];

class Root extends React.Component {
  render() {
    return (
      <Section panes={Panes} />
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('gage'));
});
