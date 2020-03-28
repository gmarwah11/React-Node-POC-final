import React, { Component } from 'react';
import sessionstorage from "sessionstorage";
class RoleList extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  componentDidMount() {
    var isloggedIn = sessionstorage.getItem("loggedIn");
    if(!isloggedIn || isloggedIn == "false"){
      window.location = '/';
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
