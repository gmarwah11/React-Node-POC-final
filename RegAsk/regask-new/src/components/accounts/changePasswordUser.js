import React, { Component } from 'react';
import './assets/css/changePassword.css';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import sessionstorage from "sessionstorage";
import axios, { get, post } from 'axios';
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

class ChangePasswordUser extends Component {
  constructor(props){
    super(props);
    this.state ={
      tempPassword:'',
      newPassword:'',
      confirmPassword:'',
      errorMsg: '',
      showError: false
    };
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.handleTempPassword = this.handleTempPassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  componentDidMount() {
    var isloggedIn = sessionstorage.getItem("loggedIn");
    if(isloggedIn == "false"){
      window.location = '/';
    }
  }
  handleConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };
  handleNewPassword = (event) => {
    this.setState({ newPassword: event.target.value });
  };
  handleTempPassword = (event) => {
    this.setState({ tempPassword: event.target.value });
  };
  changePassword = () => {
    var userName = sessionstorage.getItem("userName");
    console.log("=====>",userName);
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(this.state.tempPassword == '' || this.state.newPassword == '' || this.state.confirmPassword == ''){
      this.setState({ errorMsg:'Please enter your password',showError:false});
    }else if(!re.test(this.state.newPassword)){
      this.setState({ errorMsg:'Please enter a password meeting the format requirements',showError:true});
    }else if(this.state.newPassword !== this.state.confirmPassword ){
      this.setState({ errorMsg:'Password and confirm password do not match',showError:false});
    }else{
      this.setState({ errorMsg:'',showError:false});
      axios.post("/user/changePassword", {
        tempPassword: this.state.tempPassword,
        newPassword: this.state.newPassword,
        userName: userName
      }).then(response => {
        setTimeout(function(){
              window.location = '/';
          },100);
      }).catch(error => {
        
        // return true;
      });
    }

  };
  render() {
    return (
      <div className="App">
        <div id="b">
          <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
            <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
            <img src={require('./assets/RegASK/mini.png')} id="reservCP" alt="" />
          
       <img src={require('./assets/changePassword/RectangleCP/Rectangle 2.png')} id="b1" alt="" />
        <img src={require('./assets/changePassword/Updatebutton/Group 37.png')} id="update" alt="" onClick={this.changePassword}/>
        <img src={require('./assets/changePassword/Change password/Change password.png')} id="cp" alt="" />
        {/* <img src={require('./assets/changePassword/CPPIncorrect/Group 40.png')} id="empi" alt="" /> */}
        {this.state.showError ?  (<span><img src={require('./assets/changePassword/ValidPAssBack/Union 2.png')} id="validpb" alt="" />
        <img src={require('./assets/changePassword/ValidPAssDisC/min.png')} id="validpd" alt="" /></span>) : (<span></span>)}
        

 
         <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pit" alt="" />
        <TextField
          class="tpassT"
          label="Temp Password"
          type="password"
          autoComplete="current-password"
          value={this.state.tempPassword}
          onChange={this.handleTempPassword}
        />
         <br></br>
        <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pin" alt="" />
        <TextField
          class="npassT"
          label="New Password"
          type="password"
          autoComplete="current-password"
          value={this.state.newPassword}
          onChange={this.handleNewPassword}
        />
        <img src={require('./assets/changePassword/ValidPassIcon/Group 43.png')} id="vpi" alt="" />
        
         <br></br>
        <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pic" alt="" />
        <TextField
          class="cpassT"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          value={this.state.confirmPassword}
          onChange={this.handleConfirmPassword}
        />
        <div class="error">{this.state.errorMsg}</div>
      </div>
      </div>
    );
  }
}

export default ChangePasswordUser;
