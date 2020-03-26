import React, { Component } from 'react';
class RoleList extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  render() {
    return (
      <div className="App">
      Hi Jatin Role List {this.state.name}
      </div>
    );
  }
}

export default RoleList;
