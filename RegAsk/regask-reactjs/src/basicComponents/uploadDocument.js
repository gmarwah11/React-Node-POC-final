import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import sessionstorage from "sessionstorage";
import styles from "../assets/jss/material-kit-react/views/uploadDocumentPage.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import CustomButton from "../components/CustomButtons/Button.js"
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// @material-ui/icons;
import { Apps, CloudDownload, Email, Icon, Clear } from "@material-ui/icons";

class UploadDocument extends Component {
  constructor() {
    super();
	this.state = {
      loggedIn: true,
      username: ""
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
					<div className={classes.uploadDocwapper}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={12} className={classes.uploadDocHeader}>
								Upload Document
							</GridItem>
						</GridContainer>
						<GridContainer justify="center">
							<GridItem xs={12} sm={6} md={6} className={classes.uploadDocBodyLeft}>
								<span className={classes.require}>*</span><input accept="*/*" type="file" className={classes.iconbuttonfile}  value={this.state.filename} onChange={this.handleFiles}/><br/>
								<CustomInput
									labelText="* Password"
									id="pass"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.passwordErrorMsg}
									error={this.state.passwordError}
									inputProps={{
										type: "password",
										placeholder: "* password",
										name: "password",
										value: this.state.password,
										onChange: this.handleChange,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Email..."
									id="email"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.usernameErrorMsg}
									error={this.state.usernameError}
									inputProps={{
										type: "email",
										name: "username",
										placeholder: "* Username",
										value: this.state.username,
										onChange: this.handleChange,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Email..."
									id="email"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.usernameErrorMsg}
									error={this.state.usernameError}
									inputProps={{
										type: "email",
										name: "username",
										placeholder: "* Username",
										value: this.state.username,
										onChange: this.handleChange,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Email..."
									id="email"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.usernameErrorMsg}
									error={this.state.usernameError}
									inputProps={{
										type: "email",
										name: "username",
										placeholder: "* Username",
										value: this.state.username,
										onChange: this.handleChange,
										autoComplete: "off"
									}}
								/>
							</GridItem>
							<GridItem xs={12} sm={6} md={6} className={classes.uploadDocBodyLeft}>
							<CustomInput
									labelText="* Email..."
									id="email"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.usernameErrorMsg}
									error={this.state.usernameError}
									inputProps={{
										type: "email",
										name: "username",
										placeholder: "* Username",
										value: this.state.username,
										onChange: this.handleChange,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Password"
									id="pass"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.passwordErrorMsg}
									error={this.state.passwordError}
									inputProps={{
										type: "password",
										placeholder: "* password",
										name: "password",
										value: this.state.password,
										onChange: this.handleChange,
										autoComplete: "off"
									}}
								/>
								<FormControl className={classes.uploadDoclocationAU} >
									<InputLabel id="demo-simple-select-label">* Language</InputLabel>
									<Select value={this.state.language} onChange={this.handleLanguage} displayEmpty className={classes.selectEmpty}>
										<MenuItem value="" disabled>
											Language
										</MenuItem>
										<MenuItem value="hindi">Hindi</MenuItem>
										<MenuItem value="english">English</MenuItem>
										<MenuItem value="french">French</MenuItem>
									</Select>
								</FormControl>
								<br />
								<FormControl className={classes.uploadDoclocationAU} >
									<InputLabel id="demo-simple-select-label">* Type</InputLabel>
									<Select value={this.state.type} onChange={this.handleType} displayEmpty className={classes.selectEmpty}>
										<MenuItem value="" disabled>
											Type
										</MenuItem>
										<MenuItem value="Report">Report</MenuItem>
										<MenuItem value="Regulation">Regulation</MenuItem>
										<MenuItem value="Other">Other</MenuItem>
									</Select>
								</FormControl>
								<br />
								<FormControl className={classes.uploadDoclocationAU} >
								<InputLabel id="demo-simple-select-label">* Language</InputLabel>
								<Select value={this.state.country} onChange={this.handleCountry} displayEmpty className={classes.selectEmpty}>
									<MenuItem value="" disabled>
									Language
									</MenuItem>
									<MenuItem value="india">India</MenuItem>
									<MenuItem value="us">US</MenuItem>
									<MenuItem value="singapore">Singapore</MenuItem>
								</Select>
								</FormControl>
							</GridItem>
						</GridContainer>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={12} className={classes.uploadDocFooter}>
								{this.state.commonError ? (<div className={classes.uploadDocerrorMsg}>
									<Clear />{this.state.commonErrorMsg}
								</div>) : null}
								<CustomButton
									round
									className={classes.uploadDocbutton}
									size="lg"
									onClick={this.handleSubmit}
								>
									Upload
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

UploadDocument.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UploadDocument);

