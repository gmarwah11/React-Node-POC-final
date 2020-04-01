/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import axios from "axios";
import sessionstorage from "sessionstorage";
import appRoutes from "../../routes/dashboard.js";

import appStyle from "../../assets/jss/material-kit-react/layouts/appStyle.js";

//import image from "assets/img/sidebar-2.jpg";
import logo from "../../logo1.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
	    loggedIn: false,
      username: ""
    };
    this.resizeFunction = this.resizeFunction.bind(this);
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
	  this.switchRoutes = this.switchRoutes.bind(this);
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    if(sessionstorage.getItem("token") != null){
      this.setState({
        loggedIn : true,
        username: sessionstorage.getItem("userName")
      });
      return true;
    }else{
      this.setState({
        loggedIn : false,
        username: ""
      });
      return false;
    }
  }
  
  switchRoutes = () => {
	  let loggedOn = this.state.loggedIn;
	  let PrivateRoute = ({ component: Component, ...rest }) => {
		  return (
			<Route
			  {...rest}
			  render={ props => loggedOn ? ( <Component {...props} /> ) : ( <Redirect to={{
					  pathname: "/login", state: { from: props.location }}} /> )}
			/>
		  );
	  };
	  return (
		  <Switch>
			{appRoutes.map((prop, key) => {
			  if (prop.showAfterlogin){
          return <PrivateRoute path={prop.path} component={prop.component} key={key} />;
        }else{
          return <Route path={prop.path} component={prop.component} key={key} />;
        }
			})}
		  </Switch>
	  );
  }
  
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  isLogin(){
	  return true;
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    this.getUser();
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.mainPanel} ref="mainPanel">
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          <div className={classes.contentHome}>
              <div className={classes.container}>{this.switchRoutes()}</div>
          </div>
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
