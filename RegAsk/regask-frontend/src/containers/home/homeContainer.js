import React, { Component } from 'react';
import HomeHeader from '../../components/home/header/homeHeader';
import HomeUserMenu from '../../components/home/menu/userMenu';
import HomeUserList from '../../components/home/list/userList';
import HomeRoleList from '../../components/home/list/roleList';
import './homeContainer.css';
class HomeContainer extends Component {
  constructor(props){
  
    super(props);
    this.username = props.match.params.username; 
   
    this.state ={
      name:''
    }
  }
  componentWillMount(){
    console.log(this.props);
    // this.username = this.props.match.params.username;
  }
  render() {
    console.log('Props in Home',this.props);
    console.log('Type Home in render',this.username);
    return (
      <div id="homeCon"  >

      <HomeHeader username ={this.username}/>
      <HomeUserMenu username ={this.username}/>
      {/* <HomeUserList/> */}
       
      </div>
    );
  }
}

export default HomeContainer;