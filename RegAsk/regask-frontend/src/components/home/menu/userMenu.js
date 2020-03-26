import React, { Component } from 'react';
import '../assets/css/homeUserMenu.css';
class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.username = props.username;
    this.state = {
      name: 'Jatin'
    }
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
          <li id="logOut">
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
