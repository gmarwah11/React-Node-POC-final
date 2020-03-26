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

class Login extends Component {

  constructor(props) {

    super(props);
    // this.classes = useStyles();
    this.state = {
      name: 'Jatin',
      showFP: true,
      showEMI: false,
      emailId: '',
      password: '',
      // afterSignIn:'changepassword',
      afterSignIn: '',
      isSendLoginAPI: false
      // afterSignIn:'home/Maruti Anand'

    }
    this.afterSignInP = '';
    this.doSignIn = this.doSignIn.bind(this);
    this.doFP = this.doFP.bind(this);
    this.takeEmail = this.takeEmail.bind(this);
    this.takePassword = this.takePassword.bind(this);
  };
  doSignIn() {
    console.log('In signin', this.afterSignInP);
    var email = this.state.emailId;
    var pass = this.state.password;
    console.log('State in SignIN', this.state);
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // if ((nS.emailId.includes('@') && nS.emailId.includes('.')) && ((nS.password.includes('TE') && nS.password.includes('MP')) || re.test(nS.password))) {
      if ((email.includes('@') && email.includes('.')) && ((pass.includes('TE') && pass.includes('MP')) || re.test(pass))) {
        console.log('Do login');
      var newURLLogin = 'http://localhost:4000/api/account/login';
      var newUserData = {
        "user": {
          "emailId": email,
          "password": pass
        }
      }; 
        axios.post(
          newURLLogin,
          newUserData
        ).then(response => {
          console.log(response.status);
          
            // this.changeRedirectStatus('home/'+response.data.email);
            this.setState({ afterSignIn: 'home/' + response.data.email,isSendLoginAPI:true });
            this.afterSignInP = 'home/'+response.data.email;
          // }
          // return true;
        }).catch(error => {
          this.setState({ showEMI: true,isSendLoginAPI:true });
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
    this.setState({ emailId: e.target.value });
  }
  takePassword = (e) => {
    // console.log(e.target.value);
    this.setState({ password: e.target.value });
  }
  componentWillMount() {

    console.log('in component will update', this.state);
  }
  componentWillReceiveProps(nP) {
    console.log('Component will recieve props', nP);
  }
  shouldComponentUpdate(nP, nS) {
    console.log(nP, nS);
    console.log('in should component update', this.state);

    return true;

  }
  changeRedirectStatus = (V) => {
    this.afterSignInP = V;
    // this.props.afterSignInP = V;
    //  this.setState({afterSignIn:V});
  }
  componentWillUpdate = (nP, nS) => {
    console.log('componentWillUpdate', nP, nS);
    // this.setState({afterSignIn:nS.afterSignIn});
    this.afterSignInP = nS.afterSignIn;
    console.log('in W U', this.afterSignInP);
  }
  componentDidUpdate = (nP, nS) => {
    console.log('componentDidUpdate', nP, nS);
    console.log('in D U', this.afterSignInP);
  }
  // componentWillUnmount(){
  //   console.log('componentWillUnmount');
  // }
  render = () => {
    // if(this.state.afterSignIn.length==0){
    //   this.state.showEMI=!this.state.showEMI;
    // }
    console.log('in render', this.afterSignInP);
    console.log('in render state', this.state);
    return (
      <div id="b">
        <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
        <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
        <img src={require('./assets/©2020 RegASK. All rights reserved./mini.png')} id="reserv" alt="" />



        <div id="loginCon"  >

          <img src={require('./assets/login/RectangleLogin/Rectangle 2.png')} id="b1" alt="" />

          <NavLink to={"/" + this.afterSignInP} className="nav-link-item"> <img src={require('./assets/login/SignInIcon/Group 2.png')} onClick={this.doSignIn} id="signin" alt="" />  </NavLink>
          <NavLink to="/changepassword" type={Button} className="nav-link-item"> <img src={require('./assets/login/Forgot password/Forgot password.png')} onClick={this.doFP} style={{ display: this.state.showFP ? 'block' : 'none' }} id="fp" alt="" />   </NavLink>

          <img src={require('./assets/login/EPIncorrect/Group 40.png')} id="empi" style={{ display: this.state.showEMI ? 'block' : 'none' }} alt="" />


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
