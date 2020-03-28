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
      username: props.username,
      popupshow:false
    }
    this.handlePopup = this.handlePopup.bind(this);
  }
  componentWillMount(){
    console.log(this.props);
  }
  componentDidMount() {
    var isloggedIn = sessionstorage.getItem("loggedIn");
    if(!isloggedIn || isloggedIn == "false"){
      window.location = '/';
    }
  }
  handlePopup(){
    if(this.state.popupshow){
      this.setState({
        popupshow:false
      });
    }else{
      this.setState({
        popupshow:true
      });
    }
  }
  render() {
    console.log('Props in Home',this.props);
    console.log('Type Home in render',this.username);
    return (
      <div id="homeCon"  >

      {/* <HomeHeader username ={this.state.username}/> */}
      <div id="homeHeaderCon"> 
                <div id="h1">
                <img src={require('../../components/home/assets/header/Group 1/Group 1.png')} id="logo" alt=""/>
            </div>
            <div id="h2">
                <img src={require('../../components/home/assets/header/Subtraction 2/Subtraction 2.png')}  id="parrellogram" alt="" srcset=""/>
                <span id="welcomeu">Welcome {this.state.username}</span>
                <img src={require('../../components/home/assets/header/UserIcon/Group 19.png')}  onClick={this.handlePopup} alt="" id="userIcon"/>
            </div>
      </div>
      {this.state.popupshow ?  (<HomeUserMenu username ={this.state.username}/> ) : (<span></span>)}
      {/* <HomeUserMenu username ={this.state.username}/> */}
      {/* <HomeUserList/> */}
       
      </div>
    );
  }
}

export default HomeContainer;