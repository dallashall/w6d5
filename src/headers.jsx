import React from 'react';

class Headers extends React.Component{
  constructor() {
    super();
    this.headers = ["One", "Two", "Three"];
    this.changeIndex = this.change.bind(this);
  }

  change(e){
    debugger;
    this.props.changeIndex(e);
  }

  render() {
    return (
      <ul>
        {this.headers.map((header, index) => {
          return (
          <li key={header+"-header"}>
            <h1 onClick={this.changeIndex}>
              {header}
            </h1>
          </li>
          );
        })
        }
      </ul>
    );
  }
}

export default Headers;
