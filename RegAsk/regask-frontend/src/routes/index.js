import React, { Component } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom'; 
import App from '../App'; 
import AuthContainer from '../containers/auth/authContainer';
import HomeContainer from '../containers/home/homeContainer';
import AlertNotification from '../components/notification/alert';
import CommonHeader from '../components/header/commonHeader';
import CommonFooter from '../components/footer/coomonFooter';
import HomeHeader from '../components/home/header/homeHeader';
import HomeUserList from '../components/home/list/userList';
import HomeRoleList from '../components/home/list/roleList';
import HomeUserMenu from '../components/home/menu/userMenu';
import AccountUserLogin from '../components/accounts/loginUser';
import AccountUserChangePassword from '../components/accounts/changePasswordUser';
import AccountUserAdd from '../components/accounts/createUser';
class Router extends Component {
  render() {
    return (
      <div  > 
       <Switch>
       <Route path="/" exact component={App} />
        {/* <Route path="/:type" exact render={(props) => (<AuthContainer {...props}  />)}  /> */}
        <Route path="/login" exact component={AccountUserLogin} />
        <Route path="/adduser" exact component={AccountUserAdd} />
        <Route path="/changepassword" exact component={AccountUserChangePassword} />
        
        <Route path="/alertnotf"  exact component={AlertNotification}/>
        <Route path="/cheader"  exact component={CommonHeader}/>
        <Route path="/cfooter"  exact component={CommonFooter}/>
        {/* <Route path="/news" exact render={()=><h1>ABOUT</h1>}/>
        <Redirect exact from="/new" to="/news"/>
        <Redirect exact from="/contactus" to="/contact"/> */}
        <Switch>
        <Route path="/home/:username" exact component={HomeContainer}/>
          <Route path="/home/header/:username" exact component={HomeHeader}/>
          <Route path="/home/userlist" exact component={HomeUserList}/>
          <Route path="/home/rolelist" exact component={HomeRoleList}/>
          <Route path="/home/usermenu" exact component={HomeUserMenu}/>
        </Switch>
      </Switch>
      </div>
    );
  }
}

export default Router;
