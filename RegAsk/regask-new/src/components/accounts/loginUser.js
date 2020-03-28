import React, { Component } from 'react';
import './assets/css/login.css';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AuthLandingOperation from '../../models/operations/rootLanding';
import axios, { get, post } from 'axios';
import sessionstorage from "sessionstorage";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass:'',
      showEMI: '',
      errorMsg:''
    };
    this.doSignIn = this.doSignIn.bind(this);
    this.doFP = this.doFP.bind(this);
    this.takeEmail = this.takeEmail.bind(this);
    this.takePassword = this.takePassword.bind(this);
  }

  doSignIn() {
    this.setState({ errorMsg:"" });
    console.log("====>");
    var password = this.state.pass;
    var reversePassword = password.split('').reverse().join('');
    if(this.state.email == ""){
      this.setState({ errorMsg:"The user did not fill the email address field" });
    }else if(this.state.pass == ""){
      this.setState({ errorMsg:"The user did not fill the password field" });
    }else{
      axios.post("/user/login", {
        username: this.state.email,
        password: this.state.pass
      }).then(response => {
        //console.log("chandan doSignIn====>",response);
        //console.log("chandan doSignIn====>",response.data,response.config,response.headers);
        sessionstorage.setItem("userName", response.data.username);
        sessionstorage.setItem("userId", response.data.userId);
        sessionstorage.setItem("loggedIn", true);
        if(password.includes('TE') && password.includes('MP') && password.startsWith("TE") && reversePassword.startsWith("PM")){
          setTimeout(function(){
              window.location = '/changepassword';
          },100);
        }else{
          setTimeout(function(){
              window.location.reload();
          },100);
        }
      }).catch(error => {
        sessionstorage.setItem("userName", null);
        sessionstorage.setItem("userId", null);
        sessionstorage.setItem("loggedIn", false);
        this.setState({ showEMI: true,isSendLoginAPI:true,errorMsg:"Wrong email or password" });
        console.log(error);
        // return true;
      });
    }
  }

  doFP() {
    console.log('In fp');
    AuthLandingOperation.type = 'changepassword';
  }

  takeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  takePassword = (e) => {
    // console.log(e.target.value);
    this.setState({ pass: e.target.value });
  }
  componentWillMount() {

    console.log('in component will update', this.state);
  }
  
  changeRedirectStatus = (V) => {
    this.afterSignInP = V;
  }
  
  render = () => {
    console.log('in render', this.afterSignInP);
    console.log('in render state', this.state);
    return (
      <div id="b">
        <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
        <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
        <img src={require('./assets/RegASK/mini.png')} id="reserv" alt="" />



        <div id="loginCon"  >

          <img src={require('./assets/login/RectangleLogin/Rectangle 2.png')} id="b1" alt="" />

          <div> <img src={require('./assets/login/SignInIcon/Group 2.png')} onClick={this.doSignIn} id="signin" alt="" />  </div>
          <NavLink to="/changepassword" type={Button} className="nav-link-item"> <img src={require('./assets/login/Forgot password/Forgot password.png')} onClick={this.doFP} style={{ display: this.state.showFP ? 'block' : 'none' }} id="fp" alt="" />   </NavLink>

          {/* <img src={require('./assets/login/EPIncorrect/Group 40.png')} id="empi" style={{ display: this.state.showEMI ? 'block' : 'none' }} alt="" /> */}
          <div className="errorDiv">{this.state.errorMsg}</div> 

          <br></br>

          <img src={require('./assets/login/UserIcon/Group 13.png')} id="ei" alt="" />
          <TextField onChange={this.takeEmail} id="filled-search" label="Email" type="search" class="emailT" />
          <br></br>
          <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pi" alt="" />
          <TextField
            onChange={this.takePassword}
            class="passT"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div >
      </div>
    );
  }
}

export default Login;