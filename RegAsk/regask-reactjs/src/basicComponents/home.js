import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import sessionstorage from "sessionstorage";
import styles from "../assets/jss/material-kit-react/views/homePage.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import appRoutes from "../routes/dashboard.js";
import Header from "../components/Header/Header.js";

class Home extends Component {
  constructor() {
    super();
	this.state = {
	  loggedIn: false,
	  username: "",
	  mobileOpen: false,
    };
	this.getUser = this.getUser.bind(this);
	this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  
  getUser = () =>  {
	if(sessionstorage.getItem("token") != null){
		this.setState({
		  loggedIn: true,
		  username: sessionstorage.getItem("userName")
		});
		return true;
	}else{
		this.setState({
		  loggedIn: false,
		  username: ""
		});
		return false;
	}
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  render() {
	if (!this.getUser()) return <Redirect to={{pathname: "/login"}} />;
	const { classes, ...rest } = this.props;
    return (
      <div className={classes.homePage}>
		  <Header
            routes={appRoutes}
			isLogin={this.state.loggedIn}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
	  </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

