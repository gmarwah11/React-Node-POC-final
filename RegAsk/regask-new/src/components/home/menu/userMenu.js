import React, { Component } from 'react';
import '../assets/css/homeUserMenu.css';
import axios, { get, post } from 'axios';
import sessionstorage from "sessionstorage";
class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.username = props.username;
    this.username = props.username; 
    this.state ={
        name:'',
        username: props.username
    }
    this.logout = this.logout.bind(this);
  }
  componentWillMount(){
    console.log(this.props);
    this.setState({
      username: this.props.username
    });
  }
  logout(){
    axios
    .post("/user/logout")
    .then(response => {
      console.log(response.data);
      if (response.status === 200) {
        //this.props.updateUser({
        //  loggedIn: false,
        //  username: null
        //});
    setTimeout(function(){
    window.location = '/';
    },100);
      }
    })
    .catch(error => {
      console.log("Logout error");
    });

  }
  render() {
    return (
      <div id="userMenuCon" className="App">

        <ul>
          <li id="addUser">

            <span class="addUcontent">Add User</span>

            <img class="userOPic" src={require('../assets/menu/Group 33/Group 33.png')} alt="" />
          </li>
          <li id="listUser">
            <span class="addUcontent">List User</span>

            <img class="userOPic" src={require('../assets/menu/Path 33/Path 33.png')} alt="" />
          </li>
          <li id="listRole">
            <span class="addUcontent">List Role</span>

            <img class="userOPic" src={require('../assets/menu/Path 33/Path 33.png')} alt="" />
          </li>
          <li id="logOut" onClick={this.logout}>
            <span id="logoutContent">Logout</span>

            <img id="logOutPic" src={require('../assets/menu/Path 24/Path 24.png')} alt="" />
          </li>
        </ul>
        {/* <img id="userMenu" src={require('../assets/menu/Union/Union 1.png')} alt=""/> */}
       
      </div>
    );
  }
}

export default UserMenu;
