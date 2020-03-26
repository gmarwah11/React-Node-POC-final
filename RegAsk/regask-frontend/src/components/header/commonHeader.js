import React, { Component } from 'react';
class CommonHeader extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  render() {
    return (
      <div className="App">
      Hi Jatin Common Header {this.state.name}
      </div>
    );
  }
}

export default CommonHeader;