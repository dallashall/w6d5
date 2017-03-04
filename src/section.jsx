import React from 'react';
import Headers from './headers';

class Section extends React.Component{
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.articleData = this.props.tabData;
    this.headers = ["One", "Two", "Three"];
    this.changeIndex = this.changeIndex.bind(this);
  }

  render() {
    return (
    <section>
      <h3>{this.state.index}</h3>
      <Headers changeIndex={this.changeIndex}></Headers>
      <article className="article-section">

      </article>
    </section>
    );
  }

  changeIndex(index){
    this.setState({index});
  }
}

export default Section;
