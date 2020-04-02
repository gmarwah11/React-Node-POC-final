export default loginValidation = function(me){
    if(me.state.username == ''){
		me.setState({
			usernameErrorMsg:"The user did not fill the email address field.",
            usernameError: true,
            passwordErrorMsg:"",
			passwordError: false
		});
		return false;
	}else if(me.state.password == ''){
		me.setState({
			passwordErrorMsg:"The user did not fill the password field.",
            passwordError: true,
            usernameErrorMsg:"",
			usernameError: false,
		});
		return false;
	}else{
        me.setState({
			usernameErrorMsg:"",
			usernameError: false,
			passwordErrorMsg:"",
			passwordError: false
		});
		return true;
    }
};

export default changePasswordValidation = function(me){
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(me.state.temppassword == ''){
		me.setState({ 
			temppasswordError: true,
			temppasswordErrorMsg:'Please enter your temp password',
			newpasswordErrorMsg: "",
			newpasswordError: false,
			confirmPasswordErrorMsg: "",
			confirmPasswordError: false,
			commonError: false,
			commonErrorMsg:"",
		});
	}else if(me.state.newpassword == ''){
		me.setState({ 
			newpasswordError: true,
			newpasswordErrorMsg:'Please enter your new password',
			temppasswordErrorMsg: "",
			temppasswordError: false,
			confirmPasswordErrorMsg: "",
			confirmPasswordError: false,
			commonError: false,
			commonErrorMsg:"",
		});
	}else if(me.state.confirmPassword == ''){
		me.setState({ 
			confirmPasswordError: true,
			confirmPasswordErrorMsg:'Please enter your confirm password',
			temppasswordErrorMsg: "",
			temppasswordError: false,
			newpasswordErrorMsg: "",
			newpasswordError: false,
			commonError: false,
			commonErrorMsg:"",
		});
    }else if(!re.test(me.state.newpassword)){
      me.setState({ 
		  newpasswordError: true,
		  newpasswordErrorMsg:'Please enter a password meeting the format requirements',
		  temppasswordErrorMsg: "",
		  temppasswordError: false,
		  confirmPasswordErrorMsg: "",
		  confirmPasswordError: false,
		  commonError: false,
		  commonErrorMsg:"",
		});
    }else if(me.state.newpassword !== me.state.confirmPassword ){
      me.setState({ 
		  confirmPasswordError: true,
		  confirmPasswordErrorMsg:'Password and confirm password do not match',
		  temppasswordErrorMsg: "",
		  temppasswordError: false,
		  newpasswordErrorMsg: "",
		  newpasswordError: false,
		  commonError: false,
		  commonErrorMsg:"",
		});
    }
}

export default addUserValidation = function(me){
	if(me.state.username == ''){
		me.setState({
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
	}else if(me.state.firstname == ''){
		me.setState({
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
	}else if( me.state.lastname == ''){
		me.setState({
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
	}else if(me.state.role == ''){
		me.setState({
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
	}else if( me.state.company == ''){
		me.setState({
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
		me.setState({
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
};

export default uploadDocumentValidation = function(me){

}