import React, { Component } from 'react';
import HomeHeader from '../../components/home/header/homeHeader';
import HomeUserMenu from '../../components/home/menu/userMenu';
import sessionstorage from "sessionstorage";
import HomeUserList from '../../components/home/list/userList';
import HomeRoleList from '../../components/home/list/roleList';
import './homeContainer.css';
class HomeContainer extends Component {
  constructor(props){
  
    super(props);
    this.username = props.username; 
   
    this.state ={
      name:'',
      username: props.username
    }
  }
  componentWillMount(){
    console.log(this.props);
  }
  componentDidMount() {
    if(!sessionstorage.getItem("loggedIn")){
      window.location = '/';
    }
  }
  render() {
    console.log('Props in Home',this.props);
    console.log('Type Home in render',this.username);
    return (
      <div id="homeCon"  >

      <HomeHeader username ={this.state.username}/>
      <HomeUserMenu username ={this.state.username}/>
      {/* <HomeUserList/> */}
       
      </div>
    );
  }
}

export default HomeContainer;