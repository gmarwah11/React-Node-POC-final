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
	  country: "",
	  countryError: false,
	  countryErrorMsg: "",
	  language:"",
	  languageError: false,
	  languageErrorMsg: "",
	  file:"",
	  fileError: false,
	  fileErrorMsg: "",
	  filename:"",
	  title:"",
	  titleError: false,
	  titleErrorMsg: "",
	  type:"",
	  typeError: false,
	  typeErrorMsg: "",
	  decs:"",
	  decsError: false,
	  decsErrorMsg: "",
	  authority:"",
	  authorityError: false,
	  authorityErrorMsg: "",
	  source:"",
	  sourceError: false,
	  sourceErrorMsg: "",
	  market:"",
	  marketError: false,
	  marketErrorMsg: "",
	  uploadedBy:sessionstorage.getItem("userName"),
	  commonError: '',
	  commonErrorMsg: '',
	  isuploadDocumentDone: false
    };
	this.getUser = this.getUser.bind(this);
	this.handleLanguage = this.handleLanguage.bind(this);
	this.handleCountry = this.handleCountry.bind(this);
	this.handleFiles = this.handleFiles.bind(this);
	this.handleType = this.handleType.bind(this);
	this.handleTitle = this.handleTitle.bind(this);
	this.handleDescription = this.handleDescription.bind(this);
	this.handleAuthority = this.handleAuthority.bind(this);
	this.handleSource = this.handleSource.bind(this);
	this.handleMarket = this.handleMarket.bind(this);
	this.handleUploadedBy = this.handleUploadedBy.bind(this);
	this.uploadDocument = this.uploadDocument.bind(this);
  }

  uploadDocument = () => {
	if(this.state.file == "" || this.state.title == "" || this.state.type == "" || this.state.authority == "" ||
	this.state.market == "" || this.state.source == "" || this.state.decs == "" || this.state.language == "" || this.state.country == ""){
	  this.setState({
		errMsg: "Please fill out mandatory field."
	  });
	}else{
	  this.setState({
		errMsg: ""
	  });
	}
	var data = new FormData();
	data.append("documents", this.state.file);
	data.append("id", this.state.docId);
	data.append("title", this.state.title);
	data.append("description", this.state.decs);
	data.append("type", this.state.type);
	data.append("authority", this.state.authority);
	data.append("source", this.state.source);
	data.append("market", this.state.market);
	data.append("language", this.state.language);
	data.append("country", this.state.country);
	data.append("uploadedBy", sessionstorage.getItem("userId"));
	data.append("uploadDate", new Date());
	axios.post("http://52.170.93.166:4000/api/document/upload", data).then(res => {
	  console.log("http://52.170.93.166:4000/api/document/upload =====> ",res);
	  if(res.data.status === "success"){
		alert(res.data.message);
		window.location = '/';
	  }else{
		alert(res.data.message);
	  }
	});
  }

  handleCountry = (event) => {
	this.setState({country:event.target.value});
  }

  handleLanguage = (event) => {
	this.setState({language:event.target.value});
  }

  handleFiles = (event) => {
	console.log("======>",event.target.files[0]);
	this.setState({file : event.target.files[0]});
	this.setState({filename : event.target.value});
	console.log("======>",event.target.value);
  }

  handleType = (event) => {
	this.setState({type:event.target.value});
  }
  
  handleTitle = (event) => {
	this.setState({title:event.target.value});
  }

  handleDescription = (event) => {
	this.setState({decs:event.target.value});
  }
  
  handleAuthority = (event) => {
	this.setState({authority:event.target.value});
  }

  handleSource = (event) => {
	this.setState({source:event.target.value});
  }
  
  handleMarket = (event) => {
	this.setState({market:event.target.value});
  }

  handleUploadedBy = (event) => {
	this.setState({uploadedBy:event.target.value});
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
									labelText="* Title"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.titleErrorMsg}
									error={this.state.titleError}
									inputProps={{
										type: "text",
										placeholder: "* Title",
										name: "title",
										value: this.state.title,
										onChange: this.handleTitle,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Description"
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.descErrorMsg}
									error={this.state.descError}
									inputProps={{
										type: "text",
										name: "desc",
										placeholder: "* Description",
										value: this.state.desc,
										onChange: this.handleDescription,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Source..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.sourceErrorMsg}
									error={this.state.sourceError}
									inputProps={{
										type: "text",
										name: "source",
										placeholder: "* Source",
										value: this.state.source,
										onChange: this.handleSource,
										autoComplete: "off"
									}}
								/>
								<CustomInput
									labelText="* Authority..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.authorityErrorMsg}
									error={this.state.authorityError}
									inputProps={{
										type: "text",
										name: "authority",
										placeholder: "* Authority",
										value: this.state.authority,
										onChange: this.handleAuthority,
										autoComplete: "off"
									}}
								/>
							</GridItem>
							<GridItem xs={12} sm={6} md={6} className={classes.uploadDocBodyLeft}>
							<CustomInput
									labelText="* Market..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.marketErrorMsg}
									error={this.state.marketError}
									inputProps={{
										type: "text",
										name: "market",
										placeholder: "* Market",
										value: this.state.market,
										onChange: this.handleMarket,
										autoComplete: "off"
									}}
								/>
								<FormControl className={classes.uploadDoclocationAU} >
									<InputLabel id="demo-simple-select-label">* Language</InputLabel>
									<Select value={this.state.language} onChange={this.handleLanguage} displayEmpty className={classes.selectEmpty}>
										<MenuItem value="hindi">Hindi</MenuItem>
										<MenuItem value="english">English</MenuItem>
										<MenuItem value="french">French</MenuItem>
									</Select>
								</FormControl>
								<br />
								<FormControl className={classes.uploadDoclocationAU} >
									<InputLabel id="demo-simple-select-label">* Type</InputLabel>
									<Select value={this.state.type} onChange={this.handleType} displayEmpty className={classes.selectEmpty}>
										<MenuItem value="Report">Report</MenuItem>
										<MenuItem value="Regulation">Regulation</MenuItem>
										<MenuItem value="Other">Other</MenuItem>
									</Select>
								</FormControl>
								<br />
								<FormControl className={classes.uploadDoclocationAU} >
								<InputLabel id="demo-simple-select-label">* Country</InputLabel>
								<Select value={this.state.country} onChange={this.handleCountry} displayEmpty className={classes.selectEmpty}>
									<MenuItem value="india">India</MenuItem>
									<MenuItem value="us">US</MenuItem>
									<MenuItem value="singapore">Singapore</MenuItem>
								</Select>
								</FormControl>
								<br />
								<CustomInput
									labelText="* UploadedBy..."
									formControlProps={{
										fullWidth: true
									}}
									errorMsg={this.state.uploadedbyErrorMsg}
									error={this.state.uploadedbyError}
									inputProps={{
										type: "text",
										name: "uploadedby",
										placeholder: "* UploadedBy",
										value: this.state.uploadedby,
										onChange: this.handleUploadedBy,
										autoComplete: "off"
									}}
								/>
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
									onClick={this.uploadDocument}
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

