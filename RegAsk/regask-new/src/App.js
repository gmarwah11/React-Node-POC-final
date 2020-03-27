import React, { Component } from 'react';
import './App.css';
import Router from './routes/index'
import AuthContainer from './containers/auth/authContainer';
import HomeContainer from './containers/home/homeContainer';
import sessionstorage from "sessionstorage";
import {Button, Input, Form,Link,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
// import {Button, Input, Form} from 'react-bootstrap';
import AuthLandingOperation from './models/operations/rootLanding';
import { BottomNavigation } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Footer from './components/footer/coomonFooter';
import axios, { get, post } from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    
    this.state ={
      // type:AuthLandingOperation.type,
      // type:'login',
      type:'changepassword',
      // type:'adduser',
      username:'Super Admin',
      // type:'login',
      loggedIn: false,
      mobileOpen:false
      
    };
    this.getUser = this.getUser.bind(this);
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("chandan====>",response);
      if (response.data.user) {
        // console.log("Get User: There is a user saved in the server session: ");
        sessionstorage.setItem("userName", response.data.user.username);
        sessionstorage.setItem("userId", response.data.user.userId);
        sessionstorage.setItem("loggedIn", true);
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
		    this.props.location.pathname = "/home";
      } else {
        sessionstorage.setItem("userName", null);
        sessionstorage.setItem("userId", null);
        sessionstorage.setItem("loggedIn", false);
        this.setState({
          loggedIn: false,
          username:'Super Admin'
        });
		    this.props.location.pathname = "/login";
      }
    });
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    console.log("componentDidMount====>",!sessionstorage.getItem("loggedIn"), typeof(!sessionstorage.getItem("loggedIn")));
    if(!sessionstorage.getItem("loggedIn")){
      this.getUser();
    }else{
      this.setState({
        loggedIn: true,
        username: sessionstorage.getItem("userName")
      });
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    console.log("chandan====>",this.state.username);
    return (
      <div  > 
        {this.state.loggedIn ?  (<HomeContainer username={this.state.username}/> ) : (<AuthContainer type={this.state.type} />)}
      </div>
    );
  }
}

export default App;
