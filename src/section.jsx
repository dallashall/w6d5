import React from 'react';
import Headers from './headers';

class Section extends React.Component{
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.selectPane = this.selectPane.bind(this);
  }

  render() {
    let currentPane = this.props.panes[this.state.index];
    return (
      <section>
        <h3>{this.state.index}</h3>
        <Headers
          selectPane={this.selectPane}
          selectedPane={this.state.index}
          panes={this.props.panes}>
        </Headers>
        <article className="article-section">
          {currentPane.content}
        </article>
      </section>
    );
  }

  selectPane(index){
    this.setState({index});
  }
}

export default Section;
