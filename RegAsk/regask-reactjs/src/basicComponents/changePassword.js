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
		conpassword: "",
		conpasswordErrorMsg: "",
		conpasswordError: false,
		commonError: false,
		commonErrorMsg:""
    };
	this.getUser = this.getUser.bind(this);
  }
  
  getUser() {
	return sessionstorage.getItem("token") !== null ? true : false;
  }
	
  render() {
	if (!this.getUser()) return <Redirect to={{pathname: "/login"}} />;
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
						  id="temppassword"
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
							  onChange: this.handleChange,
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
							  id="newpassword"
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
								  onChange: this.handleChange,
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
							  id="conpassword"
							  formControlProps={{
								  fullWidth: true
							  }}
							  errorMsg={this.state.conpasswordErrorMsg}
							  error={this.state.conpasswordError}
							  inputProps={{
								  type: "password",
								  placeholder: "Confirm Password",
								  name: "conpassword",
								  value: this.state.conpassword,
								  onChange: this.handleChange,
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
						  {this.state.commonError ? (<div className={classes.confirmpasswordErrorMsg}>
							  <Clear />{this.state.commonErrorMsg}
						  </div>) : null}
						  <CustomButton
							  round
							  className={classes.confirmpasswordbutton}
							  size="lg"
							  onClick={this.handleSubmit}
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

