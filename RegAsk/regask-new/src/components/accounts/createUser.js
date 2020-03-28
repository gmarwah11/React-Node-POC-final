///// Rekha UI
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import './assets/css/addUser.css';
//import './assets/createuserimages/star.svg'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
import sessionstorage from "sessionstorage";
import axios, { get, post } from 'axios';

class CreateOrAddUser extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: "",
      ex: "",
      location: "",
      role: "",
      company: "",
      industry: "",
      errorMsg: ''
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEx = this.handleEx.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.handleIndustry = this.handleIndustry.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    var isloggedIn = sessionstorage.getItem("loggedIn");
    if(!isloggedIn || isloggedIn == "false"){
      window.location = '/';
    }
  }

  addUser(){
    console.log("=====>adduser");
    if(this.state.username == ''){
      this.setState({errorMsg : 'The user did not fill the email address field'});
    }else{
      axios.post("/user/signup", {
        username: this.state.username,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        ex: this.state.ex,
        location: this.state.location,
        role: this.state.role,
        company: this.state.company,
        industry: this.state.industry
      }).then(response => {
        setTimeout(function(){
            window.location = "/";
        },100);
      }).catch(error => {
      //   setTimeout(function(){
      //     window.location.reload();
      // },100);
        this.setState({errorMsg : 'The super admin tried to create a user that already exists'});
      });
    }
  }
  
  handleUserName = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleFirstname = (event) => {
    this.setState({ firstname: event.target.value });
  };
  handleLastname = (event) => {
    this.setState({ lastname: event.target.value });
  };
  handlePhone = (event) => {
    this.setState({ phone: event.target.value });
  };
  handleEx = (event) => {
    this.setState({ ex: event.target.value });
  };
  handleLocation = (event) => {
    this.setState({ location: event.target.value });
  };
  handleRole = (event) => {
    this.setState({ role: event.target.value });
  };
  handleCompany = (event) => {
    this.setState({ company: event.target.value });
  };
  handleIndustry = (event) => {
    this.setState({ industry: event.target.value });
  };


  render() {

    return (
      <div className="App">
        <div id="b">
          <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
          <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
          <img src={require('./assets/RegASK/mini.png')} id="reservAddUser" alt="" />
          <div id="form">
            <img src={require('./assets/addUser/RectangleAddUser/Rectangle 2@2x.png')} id="b1addUser" alt="" />
            <img src={require('./assets/addUser/Create account/Create account.png')} id="ca" alt="" />
            <div id="leftT">
              <TextField
                class="fnAU"
                label="* First name"
                id="filled-search" type="search"
                onChange={this.handleFirstname}
                value={this.state.firstname}
              />
              <br></br>
              <TextField
                class="eAU"
                label="* Email"
                id="filled-search" type="search"
                onChange={this.handleUserName}
                value={this.state.username}
              />
              <br />
              <div className="errorDiv">{this.state.errorMsg}</div>
              <TextField
                class="cnAU"
                label="* Company name"
                id="filled-search" type="search"
                onChange={this.handleCompany}
                value={this.state.company}
              />
              <br></br>
              <img src={require('./assets/addUser/Phone number/Phone number.png')} id="pnImg" alt="" />
              <br></br>
              <TextField
                class="exAU"
                label="Ex"
                id="filled-search" type="search"
                onChange={this.handleEx}
                value={this.state.ex}
              />
              <TextField
                class="pnAU"
                label="Number"
                id="filled-search" type="text"
                onChange={this.handlePhone}
                value={this.state.phone}
              />
            </div>


            <div id="rightT">
            <TextField
                class="lnAU"
                label="* Last name"
                id="filled-search" type="text"
                onChange={this.handleLastname}
                value={this.state.lastname}
              />
              <br></br>
              <TextField
                class="roleAU"
                label="* Role"
                id="filled-search" type="text"
                onChange={this.handleRole}
                value={this.state.role}
              />
              <br></br>
            <FormControl id="locationAU"  >
        <InputLabel id="demo-simple-select-label">* Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.handleLocation}
          value={this.state.location}
        >
          <MenuItem value={10}>India</MenuItem>
          <MenuItem value={20}>UK</MenuItem>
          <MenuItem value={30}>US</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <FormControl id="industryAU"  >
        <InputLabel id="demo-simple-select-label">Industry</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.handleIndustry}
          value={this.state.industry}
          
        >
          <MenuItem value={10}>IT</MenuItem>
          <MenuItem value={20}>Non IT</MenuItem>
          <MenuItem value={30}>Civil</MenuItem>
        </Select>
      </FormControl>   
            </div>
            <div id="create" alt=""  onClick={this.addUser}>Create</div> 
            {/* <img src={require('./assets/addUser/Creatbutton/Disabled button.png')} id="create" alt=""  onClick={this.addUser} /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default CreateOrAddUser;


