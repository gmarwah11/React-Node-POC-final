import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import sessionstorage from "sessionstorage";
import styles from "../assets/jss/material-kit-react/views/changePasswordPage.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import CustomButton from "../components/CustomButtons/Button.js";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";

class ChangePassword extends Component {
  constructor() {
    super();
	this.state = {
		loggedIn: true,
		temppassword: "",
		temppasswordErrorMsg: "",
		temppasswordError: false,
		newpassword: "",
		newpasswordErrorMsg: "",
		newpasswordError: false,
		confirmPassword: "",
		confirmPasswordErrorMsg: "",
		confirmPasswordError: false,
		commonError: false,
		commonErrorMsg:"",
		ischangePasswordDone: false
    };
	this.getUser = this.getUser.bind(this);
	this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.handleTempPassword = this.handleTempPassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  handleConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };
  handleNewPassword = (event) => {
    this.setState({ newpassword: event.target.value });
  };
  handleTempPassword = (event) => {
    this.setState({ temppassword: event.target.value });
  };
  changePassword = () => {
	let userName = sessionstorage.getItem("userName");
	let me = this;
    console.log("=====>",userName);
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(this.state.temppassword == ''){
		this.setState({ 
			temppasswordError: true,
			temppasswordErrorMsg:'Please enter your temp password',
			newpasswordErrorMsg: "",
			newpasswordError: false,
			confirmPasswordErrorMsg: "",
			confirmPasswordError: false,
			commonError: false,
			commonErrorMsg:"",
		});
	}else if(this.state.newpassword == ''){
		this.setState({ 
			newpasswordError: true,
			newpasswordErrorMsg:'Please enter your new password',
			temppasswordErrorMsg: "",
			temppasswordError: false,
			confirmPasswordErrorMsg: "",
			confirmPasswordError: false,
			commonError: false,
			commonErrorMsg:"",
		});
	}else if(this.state.confirmPassword == ''){
		this.setState({ 
			confirmPasswordError: true,
			confirmPasswordErrorMsg:'Please enter your confirm password',
			temppasswordErrorMsg: "",
			temppasswordError: false,
			newpasswordErrorMsg: "",
			newpasswordError: false,
			commonError: false,
			commonErrorMsg:"",
		});
    }else if(!re.test(this.state.newpassword)){
      this.setState({ 
		  newpasswordError: true,
		  newpasswordErrorMsg:'Please enter a password meeting the format requirements',
		  temppasswordErrorMsg: "",
		  temppasswordError: false,
		  confirmPasswordErrorMsg: "",
		  confirmPasswordError: false,
		  commonError: false,
		  commonErrorMsg:"",
		});
    }else if(this.state.newpassword !== this.state.confirmPassword ){
      this.setState({ 
		  confirmPasswordError: true,
		  confirmPasswordErrorMsg:'Password and confirm password do not match',
		  temppasswordErrorMsg: "",
		  temppasswordError: false,
		  newpasswordErrorMsg: "",
		  newpasswordError: false,
		  commonError: false,
		  commonErrorMsg:"",
		});
    }else{
      this.setState({ 
		temppasswordErrorMsg: "",
		temppasswordError: false,
		newpasswordErrorMsg: "",
		newpasswordError: false,
		confirmPasswordErrorMsg: "",
		confirmPasswordError: false,
		commonError: false,
		commonErrorMsg:"",
	  });
      axios.post("http://localhost:5000/user/changePassword", {
        tempPassword: this.state.tempPassword,
        newPassword: this.state.newPassword,
        userName: userName
      },{
        headers :{
          Authorization: sessionstorage.getItem('token')
        }
      }).then(response => {
        me.setState({
			ischangePasswordDone : true
		});
      }).catch(error => {
        me.setState({
			ischangePasswordDone : false,
			commonError: false,
			commonErrorMsg:"Something went wrong. please try again.",
			temppasswordErrorMsg: "",
			temppasswordError: false,
			newpasswordErrorMsg: "",
			newpasswordError: false,
			confirmPasswordErrorMsg: "",
			confirmPasswordError: false,
		});
      });
    }

  };
  
  getUser() {
	return sessionstorage.getItem("token") !== null ? true : false;
  }
	
  render() {
	if (!this.getUser()) return <Redirect to={{pathname: "/login"}} />;
	if (this.state.ischangePasswordDone) return <Redirect to={{pathname: "/home"}} />;
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
				  <div className={classes.confirmpasswordwapper}> 
					  <div className={classes.confirmpasswordinnerwapper}> 
						  <CustomInput
						  labelText="Temp Password"
						  formControlProps={{
							  fullWidth: true
						  }}
						  errorMsg={this.state.temppasswordErrorMsg}
						  error={this.state.temppasswordError}
						  inputProps={{
							  type: "password",
							  name: "temppassword",
							  placeholder: "Temp Password",
							  value: this.state.temppassword,
							  onChange: this.handleTempPassword,
							  startAdornment: (
							  <InputAdornment position="start">
								  {/* <Email className={classes.inputIconsColor} /> */}
								  <Icon className={classes.inputIconsColor}>
									  lock_outline
								   </Icon>
							  </InputAdornment>
							  )
						  }}
						  />
						  <CustomInput
							  labelText="New Password"
							  formControlProps={{
								  fullWidth: true
							  }}
							  errorMsg={this.state.newpasswordErrorMsg}
							  error={this.state.newpasswordError}
							  inputProps={{
								  type: "password",
								  placeholder: "New Password",
								  name: "newpassword",
								  value: this.state.newpassword,
								  onChange: this.handleNewPassword,
								  startAdornment: (
								  <InputAdornment position="start">
									  <Icon className={classes.inputIconsColor}>
									  lock_outline
									  </Icon>
								  </InputAdornment>
								  ),
								  autoComplete: "off"
							  }}
						  />
						  <CustomInput
							  labelText="Confirm Password"
							  formControlProps={{
								  fullWidth: true
							  }}
							  errorMsg={this.state.confirmPasswordErrorMsg}
							  error={this.state.confirmPasswordError}
							  inputProps={{
								  type: "password",
								  placeholder: "Confirm Password",
								  name: "conpassword",
								  value: this.state.confirmPassword,
								  onChange: this.handleConfirmPassword,
								  startAdornment: (
								  <InputAdornment position="start">
									  <Icon className={classes.inputIconsColor}>
									  lock_outline
									  </Icon>
								  </InputAdornment>
								  ),
								  autoComplete: "off"
							  }}
						  />
						  {this.state.commonError ? (<div className={classes.commonErrorMsg}>
							  <Clear />{this.state.commonErrorMsg}
						  </div>) : null}
						  <CustomButton
							  round
							  className={classes.confirmpasswordbutton}
							  size="lg"
							  onClick={this.changePassword}
						  >
						  Update
						  </CustomButton>
					  </div>
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

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChangePassword);

