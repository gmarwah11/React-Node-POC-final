import React, { Component } from 'react';
import '../assets/css/homeUserList.css';
import sessionstorage from "sessionstorage";
class UserList extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  componentDidMount() {
    if(!sessionstorage.getItem("loggedIn")){
      window.location = '/';
    }
  }
  render() {
    return (
      <div id="userListCon" className="App">
      Hi Jatin User List {this.state.name}
      </div>
    );
  }
}

export default UserList;