import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import sessionstorage from "sessionstorage";
import styles from "../assets/jss/material-kit-react/views/signupPage.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import CustomButton from "../components/CustomButtons/Button.js"
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import { Apps, CloudDownload } from "@material-ui/icons";

class Signup extends Component {
  constructor() {
    super();
	this.state = {
		username: "",
		usernameErrorMsg: "",
      	usernameError: false,
		firstname: "",
		firstnameErrorMsg: "",
		firstnameError: false,
		lastname: "",
		lastnameErrorMsg: "",
		lastnameError: false,
		location: "",
		locationErrorMsg: "",
		locationError: false,
		role: "",
		roleErrorMsg: "",
		roleError: false,
		company: "",
		companyErrorMsg: "",
		companyError: false,
		industry: "",
		phone: "",
		ex: "",
		errorMsg: '',
		errorMsgCommon: '',
		iscreateUserDone: false
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
	this.getUser = this.getUser.bind(this);
	this.validation = this.validation.bind(this);
  }
  
  componentDidMount() {
    // var isloggedIn = sessionstorage.getItem("loggedIn");
    // if(!isloggedIn || isloggedIn == "false"){
    //   return <Redirect to={{pathname: "/login"}} />
    // }
  }

  validation(){
	if(this.state.username == ''){
		this.setState({
			usernameErrorMsg:"Please fill out username field.",
			usernameError: true,
			companyErrorMsg:"",
			companyError: false,
			roleErrorMsg:"",
			roleError: false,
			locationErrorMsg:"",
			locationError: false,
			lastnameErrorMsg:"",
			lastnameError: false,
			firstnameErrorMsg:"",
			firstnameError: false,
			iscreateUserDone: false
		});
		return false;
	}else if(this.state.firstname == ''){
		this.setState({
			firstnameErrorMsg:"Please fill out firstname field.",
			firstnameError: true,
			usernameErrorMsg:"",
			usernameError: false,
			companyErrorMsg:"",
			companyError: false,
			roleErrorMsg:"",
			roleError: false,
			locationErrorMsg:"",
			locationError: false,
			lastnameErrorMsg:"",
			lastnameError: false,
			usernameErrorMsg:"",
			usernameError: false,
			iscreateUserDone: false
		});
		return false;
	}else if( this.state.lastname == ''){
		this.setState({
			lastnameErrorMsg:"Please fill out lastname field.",
			lastnameError: true,
			usernameErrorMsg:"",
			usernameError: false,
			companyErrorMsg:"",
			companyError: false,
			roleErrorMsg:"",
			roleError: false,
			locationErrorMsg:"",
			locationError: false,
			firstnameErrorMsg:"",
			firstnameError: false,
			usernameErrorMsg:"",
			usernameError: false,
			iscreateUserDone: false
		});
		return false;
	}else if(this.state.role == ''){
		this.setState({
			roleErrorMsg:"Please fill out role field.",
			roleError: true,
			usernameErrorMsg:"",
			usernameError: false,
			companyErrorMsg:"",
			companyError: false,
			locationErrorMsg:"",
			locationError: false,
			lastnameErrorMsg:"",
			lastnameError: false,
			firstnameErrorMsg:"",
			firstnameError: false,
			usernameErrorMsg:"",
			usernameError: false,
			iscreateUserDone: false
		});
		return false;
	}else if( this.state.company == ''){
		this.setState({
			companyErrorMsg:"Please fill out company field.",
			companyError: true,
			usernameErrorMsg:"",
			usernameError: false,
			roleErrorMsg:"",
			roleError: false,
			locationErrorMsg:"",
			locationError: false,
			lastnameErrorMsg:"",
			lastnameError: false,
			firstnameErrorMsg:"",
			firstnameError: false,
			usernameErrorMsg:"",
			usernameError: false,
			iscreateUserDone: false
		});
		return false;
	}else{
		this.setState({
			usernameErrorMsg:"",
			usernameError: false,
			companyErrorMsg:"",
			companyError: false,
			roleErrorMsg:"",
			roleError: false,
			locationErrorMsg:"",
			locationError: false,
			lastnameErrorMsg:"",
			lastnameError: false,
			firstnameErrorMsg:"",
			firstnameError: false,
			usernameErrorMsg:"",
			usernameError: false,
			iscreateUserDone: false
		});
		return true;
	}
  }

  addUser(){
    this.setState({commonError : false,commonErrorMsg: ''});
	console.log("=====>adduser");
	let me = this;
    if(this.validation()){
      axios.post("http://localhost:5000/user/adduser", {
        username: this.state.username,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        ex: this.state.ex,
        location: this.state.location,
        role: this.state.role,
        company: this.state.company,
        industry: this.state.industry
      },{
        headers :{
          Authorization: sessionstorage.getItem('token')
        }
      }).then(response => {
        if(response.data.error){
			me.setState({iscreateUserDone: false,commonError: true,commonErrorMsg : response.data.error});
        }else{
		  alert("User account successfully added.");
		  me.setState({
			iscreateUserDone: true
		  })
        }
      }).catch(error => {
        me.setState({iscreateUserDone: false,commonError: true,commonErrorMsg : 'Something went wrong. please try again.'});
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
  getUser() {
	return sessionstorage.getItem("token") !== null ? true : false;
  };
	
  render() {
	if (!this.getUser()) return <Redirect to={{pathname: "/login"}} />;
	if (this.state.iscreateUserDone) return <Redirect to={{pathname: "/home"}} />;
	const { classes } = this.props;
    return (
		<div
			className={classes.pageHeader}
		>
		<div className={classes.container}>
		  <GridContainer justify="center">
			<GridItem xs={12} sm={12} md={3} className={classes.brandwapper}>
			  <img src={require('../assets/img/brand.png')} alt="" className={classes.brandImage} />
			</GridItem>
			<GridItem xs={12} sm={12} md={6}>
				<div className={classes.wapper}>
					<div className={classes.signupwapper}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={12} className={classes.signupHeader}>
								Create Account
							</GridItem>
						</GridContainer>
						<GridContainer justify="center">
							<GridItem xs={12} sm={6} md={6} className={classes.signupBodyLeft}>
								<CustomInput
									labelText="* FirstName..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.firstnameErrorMsg}
									error={this.state.firstnameError}
									inputProps={{
										type: "text",
										name: "firstname",
										placeholder: "* FirstName",
										value: this.state.firstname,
										onChange: this.handleFirstname,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Email..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.usernameErrorMsg}
									error={this.state.usernameError}
									inputProps={{
										type: "email",
										placeholder: "* Email",
										name: "email",
										value: this.state.username,
										onChange: this.handleUserName,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Company Name..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.companyErrorMsg}
									error={this.state.companyError}
									inputProps={{
										type: "text",
										name: "company",
										placeholder: "* Company Name",
										value: this.state.company,
										onChange: this.handleCompany,
										autoComplete: "off"
									}}
								/>
								<GridContainer justify="center">
									<GridItem xs={12} sm={12} md={6} className={classes.signuptext}>
										<div className={classes.signuplable}>Phone Number</div>
										<CustomInput
											labelText="Ex..."
											formControlProps={{
												fullWidth: true
											}}
											errorMsg={this.state.exErrorMsg}
											error={this.state.exError}
											inputProps={{
												type: "text",
												name: "ex",
												placeholder: "Ex",
												value: this.state.ex,
												onChange: this.handleEx,
												autoComplete: "off"
											}}
										/>
									</GridItem>
									<GridItem xs={12} sm={12} md={6} className={classes.signuptext}>
										<CustomInput
											labelText="Phone..."
											formControlProps={{
												fullWidth: true
											}}
											errorMsg={this.state.phoneErrorMsg}
											error={this.state.phoneError}
											inputProps={{
												type: "text",
												name: "phone",
												placeholder: "Phone",
												value: this.state.phone,
												onChange: this.handlePhone,
												autoComplete: "off"
											}}
										/>
									</GridItem>
								</GridContainer>
							</GridItem>
							<GridItem xs={12} sm={6} md={6} className={classes.signupBodyRight}>
							<CustomInput
									labelText="* Last Name..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.lastnameErrorMsg}
									error={this.state.lastnameError}
									inputProps={{
										type: "text",
										name: "lastname",
										placeholder: "* Last Name",
										value: this.state.lastname,
										onChange: this.handleLastname,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Role"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.roleErrorMsg}
									error={this.state.roleError}
									inputProps={{
										type: "text",
										placeholder: "* Role",
										name: "role",
										value: this.state.role,
										onChange: this.handleRole,
										autoComplete: "off"
									}}
								/>
								<FormControl className={classes.signuplocationAU} >
									<InputLabel id="demo-simple-select-label">Location</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										onChange={this.handleLocation}
										value={this.state.location}
									>
										<MenuItem value="india">India</MenuItem>
										<MenuItem value="us">US</MenuItem>
										<MenuItem value="singapore">Singapore</MenuItem>
									</Select>
								</FormControl>
								<br />
								<FormControl className={classes.signuplocationAU} >
									<InputLabel id="demo-simple-select-label">Industry</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										onChange={this.handleIndustry}
										value={this.state.industry}
									>
										<MenuItem value="it">IT</MenuItem>
										<MenuItem value="non-it">Non IT</MenuItem>
										<MenuItem value="other">Civil</MenuItem>
									</Select>
								</FormControl>
							</GridItem>
						</GridContainer>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={12} className={classes.signupFooter}>
								{this.state.commonError ? (<div className={classes.signuperrorMsg}>
									<Clear />{this.state.commonErrorMsg}
								</div>) : null}
								<CustomButton
									round
									className={classes.signupbutton}
									size="lg"
									onClick={this.addUser}
								>
									Create
								</CustomButton>
							</GridItem>
						</GridContainer>
				  </div>
			  </div>
			</GridItem>
			<GridItem xs={12} sm={12} md={3} className={classes.brandwapper}>
			</GridItem>
		  </GridContainer>
		</div>
	  </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);

