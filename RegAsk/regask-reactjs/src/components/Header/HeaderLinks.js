import React from "react";
import classNames from "classnames";
import axios from "axios";
import sessionstorage from "sessionstorage";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
// core components
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
const userIcon = require('../../assets/img/Group 19.png');
class HeaderLinks extends React.Component {
  state = {
    open: false,
    username:sessionstorage.getItem('userName')
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  logout = (event) => {
	  console.log("logout");
	  event.preventDefault();
    console.log("logging out");
    axios
      .post("http://localhost:5000/user/logout",{},{
        headers :{
          Authorization: sessionstorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          sessionstorage.setItem("token", null);
          sessionstorage.setItem("loggedIn", false);
          sessionstorage.setItem("userId", null);
          sessionstorage.setItem("userName", null);
          //this.props.updateUser({
          //  loggedIn: false,
          //  username: null
          //});
		  setTimeout(function(){
			window.location.reload();
		  },100);
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, isLogin } = this.props;
    const { open } = this.state;
    return (
      <div>
        <span className={classes.welcomeu}>Welcome <br />{this.state.username}</span>
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <img src={userIcon}  alt="" className={classes.userIcon}/>
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper className={classes.tooltipwapper}>
                  <div className={classes.arrowup}></div>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        <Link to="/addUser" className={classes.dropdownLink}>
                          Add User
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        <Link to="/listUser" className={classes.dropdownLink}>
                          List User
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        <Link to="/uploadDocument" className={classes.dropdownLink}>
                          Upload Document
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={this.logout}
                        className={classes.dropdownItem}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
		  </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
