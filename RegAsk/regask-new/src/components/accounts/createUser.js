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
import './assets/createuserimages/star.svg'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';

class CreateOrAddUser extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.state = {
      name: 'Jatin',
      age: '',
      setAge: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({ setAge: event.target.value });
  };
  onSubmit(e) {
    e.preventDefault()


  }


  render() {

    return (
      <div className="App">
        <div id="b">
          <img src={require('./assets/RegAskLogo/Group 1.png')} id="logo1" alt="" />
          <img src={require('./assets/Parallelorgam/Path 19@2x.png')} id="backParr" />
          <img src={require('./assets/©2020 RegASK. All rights reserved/mini.png')} id="reservAddUser" alt="" />
          <div id="form">
            <img src={require('./assets/addUser/RectangleAddUser/Rectangle 2@2x.png')} id="b1addUser" alt="" />
            <img src={require('./assets/addUser/Creatbutton/Disabled button.png')} id="create" alt="" />
            <img src={require('./assets/addUser/Create account/Create account.png')} id="ca" alt="" />
            <div id="leftT">
              <TextField
                class="fnAU"
                label="First name"
                id="filled-search" type="search"
              />
              <br></br>
              <TextField
                class="eAU"
                label="Email"
                id="filled-search" type="search"
              />
              <br></br>
              <TextField
                class="cnAU"
                label="Company name"
                id="filled-search" type="search"
              />
              <br></br>
              <img src={require('./assets/addUser/Phone number/Phone number.png')} id="pnImg" alt="" />
              <br></br>
              <TextField
                class="exAU"
                label="Ex"
                id="filled-search" type="search"
              />
              <TextField
                class="pnAU"
                label="Number"
                id="filled-search" type="text"
              />
            </div>


            <div id="rightT">
            <TextField
                class="lnAU"
                label="Last name"
                id="filled-search" type="text"
              />
              <br></br>
              <TextField
                class="roleAU"
                label="Role"
                id="filled-search" type="text"
              />
              <br></br>
            <FormControl id="locationAU"  >
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          
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
          
          
        >
          <MenuItem value={10}>IT</MenuItem>
          <MenuItem value={20}>Non IT</MenuItem>
          <MenuItem value={30}>Civil</MenuItem>
        </Select>
      </FormControl>   
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateOrAddUser;


