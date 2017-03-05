import React from 'react';

class Headers extends React.Component{
  constructor() {
    super();
    this.selectPane = this.selectPane.bind(this);
  }

  selectPane(e){
    return () => this.props.selectPane(e);
  }

  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((e, idx) => {
      let title = e.title;
      let classString = idx === selected ? 'tab-selected' : '';
      return (
        <li
          key={"tab-" + idx}
          className={classString}
          onClick={this.selectPane(idx)}>
          <h1>{title}</h1>
        </li>
      );
    });
    return (
      <ul>
        {headers}
      </ul>
    );
  }
}

export default Headers;
