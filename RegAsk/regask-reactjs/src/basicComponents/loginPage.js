import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import sessionstorage from "sessionstorage";
import styles from "../assets/jss/material-kit-react/views/loginPage.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import CustomButton from "../components/CustomButtons/Button.js";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";

class Login extends Component {
  constructor() {
    super();
	this.state = {
      loggedIn: true,
      username: "",
      usernameErrorMsg: "",
      usernameError: false,
      password: "",
      passwordErrorMsg: "",
      passwordError: false,
      commonError: false,
      commonErrorMsg:""
    };
    this.getUser = this.getUser.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }

  validation(value){
    if(this.state.username == ''){
		this.setState({
			usernameErrorMsg:"The user did not fill the email address field.",
			usernameError: true
		});
		return false;
	}else if(this.state.password == ''){
		this.setState({
			passwordErrorMsg:"The user did not fill the password field.",
			passwordError: true
		});
		return false;
	}else{
        this.setState({
			usernameErrorMsg:"",
			usernameError: false,
			passwordErrorMsg:"",
			passwordError: false
		});
		return true;
    }
  }

  handleUsername(event){
    this.setState({ username: event.target.value });
  }

  handlePassword(event){
    this.setState({ password: event.target.value });
  }

  login(){
    this.setState({commonError: false, commonErrorMsg:""});
    console.log("=====>login");
    if(this.validation()){
        var password = this.state.password;
        var reversePassword = password.split('').reverse().join('');
        axios.post("http://localhost:5000/user/login", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            if(response.data.success){
                sessionstorage.setItem("token",response.data.token)
                sessionstorage.setItem("userName", response.data.user.username);
                sessionstorage.setItem("userId", response.data.user.id);
                sessionstorage.setItem("loggedIn", true);
                if(password.includes('TE') && password.includes('MP') && password.startsWith("TE") && reversePassword.startsWith("PM")){
                    return <Redirect to="/changePassword" push={true} />
                }else{
                    return <Redirect to="/home" push={true} />
                }
            }else{
                sessionstorage.setItem("token",null);
                sessionstorage.setItem("userName", null);
                sessionstorage.setItem("userId", null);
                sessionstorage.setItem("loggedIn", false);
                this.setState({commonError: true, commonErrorMsg:response.datamsg});
            }
        }).catch(error => {
            sessionstorage.setItem("token",null);
            sessionstorage.setItem("userName", null);
            sessionstorage.setItem("userId", null);
            sessionstorage.setItem("loggedIn", false);
            this.setState({ showEMI: true,isSendLoginAPI:true,errorMsg:"Wrong email or password" });
            console.log(error);
            // return true;
        });
    }
  }
  
  getUser() {
	return sessionstorage.getItem("token") !== null ? true : false;
  }
	
  render() {
	if (this.getUser()) return <Redirect to={{pathname: "/home"}} />;
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
                    <div className={classes.loginwapper}> 
                        <div className={classes.logininnerwapper}> 
                            <CustomInput
                            labelText="Email..."
                            id="email"
                            formControlProps={{
                                fullWidth: true
                            }}
                            errorMsg={this.state.usernameErrorMsg}
                            error={this.state.usernameError}
                            inputProps={{
                                type: "email",
                                name: "username",
                                placeholder: "Username",
                                value: this.state.username,
                                onChange: this.handleUsername,
                                endAdornment: (
                                <InputAdornment position="end">
                                    {/* <Email className={classes.inputIconsColor} /> */}
                                    <Icon className={classes.inputIconsColor}>
                                        perm_identity
                                    </Icon>
                                </InputAdornment>
                                )
                            }}
                            />
                            <CustomInput
                                labelText="Password"
                                id="pass"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                errorMsg={this.state.passwordErrorMsg}
                                error={this.state.passwordError}
                                inputProps={{
                                    type: "password",
                                    placeholder: "password",
                                    name: "password",
                                    value: this.state.password,
                                    onChange: this.handlePassword,
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon className={classes.inputIconsColor}>
                                        lock_outline
                                        </Icon>
                                    </InputAdornment>
                                    ),
                                    autoComplete: "off"
                                }}
                            />
                            {this.state.commonError ? (<div className={classes.errorMsg}>
                                <Clear />{this.state.commonErrorMsg}
                            </div>) : null}
                            <CustomButton
                                round
                                className={classes.signinbutton}
                                size="lg"
                                onClick={this.login}
                            >
                            Sign In
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

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);

