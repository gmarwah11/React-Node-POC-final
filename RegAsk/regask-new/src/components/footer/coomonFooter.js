import React, { Component } from 'react';
class CommonFooter extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  render() {
    return (
      <div className="App">
      Hi Jatin Common Footer {this.state.name}
      </div>
    );
  }
}

export default CommonFooter;