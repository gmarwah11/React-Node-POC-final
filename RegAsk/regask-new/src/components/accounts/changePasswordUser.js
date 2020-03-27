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
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

class ChangePasswordUser extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:'Jatin'
    }
  }
  render() {
    return (
      <div className="App">
        <div id="b">
          <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
            <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
            <img src={require('./assets/RegASK/mini.png')} id="reserv" alt="" />
          
       <img src={require('./assets/changePassword/RectangleCP/Rectangle 2.png')} id="b1" alt="" />
        <img src={require('./assets/changePassword/Updatebutton/Group 37.png')} id="update" alt="" />
        <img src={require('./assets/changePassword/Change password/Change password.png')} id="cp" alt="" />
        <img src={require('./assets/changePassword/CPPIncorrect/Group 40.png')} id="empi" alt="" />
        <img src={require('./assets/changePassword/ValidPAssBack/Union 2.png')} id="validpb" alt="" />
        <img src={require('./assets/changePassword/ValidPAssDisC/min.png')} id="validpd" alt="" />

 
         <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pit" alt="" />
        <TextField
          class="tpassT"
          label="Temp Password"
          type="password"
          autoComplete="current-password"
        />
         <br></br>
        <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pin" alt="" />
        <TextField
          class="npassT"
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
        <img src={require('./assets/changePassword/ValidPassIcon/Group 43.png')} id="vpi" alt="" />
        
         <br></br>
        <img src={require('./assets/login/PasswordIcon/Path 18.png')} id="pic" alt="" />
        <TextField
          class="cpassT"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      </div>
    );
  }
}

export default ChangePasswordUser;
