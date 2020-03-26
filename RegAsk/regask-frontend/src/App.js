import React, { Component } from 'react';
import './App.css';
import Router from './routes/index'
import AuthContainer from './containers/auth/authContainer';
import HomeContainer from './containers/home/homeContainer';
import {Button, Input, Form,Link,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
// import {Button, Input, Form} from 'react-bootstrap';
import AuthLandingOperation from './models/operations/rootLanding';
import { BottomNavigation } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Footer from './components/footer/coomonFooter';
class App extends Component {
  constructor(props){
    super(props); 
    this.isHome = false;
    // this.isAuth = false;
    
    this.state ={
      // type:AuthLandingOperation.type,
      // type:'login',
      type:'changepassword',
      // type:'adduser',
      username:'Super Admin'
      // type:'login',
      
    }
  }
  render() {
    return (
      <div  > 
      {/* <Router/> */} 
      {/* <Button as={NavLink} to={'/home/'+this.state.username}  class="btn btn-primary"  >HOME</Button> */}
      {/* <ListItem button component={NavLink} to="/home/JatinMarutiAnand">Home</ListItem> */}
      {/* <NavLink to="/home/JatinMarutiAnand" activeClassName="active"  className="nav-link-item">   Home </NavLink> */}
 
      {/* <NavLink to="/home/header/Maruti RajShish" activeClassName="active"  className="nav-link-item">   Home Header </NavLink> */}
     {/* <BottomNavigation component={Footer}>FOOTER</BottomNavigation> */}
      {this.isHome ?  <HomeContainer username={this.state.username}/> : <AuthContainer type={this.state.type} />}
      
     
      </div>
    );
  }
}

export default App;
