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
import uploadDocument from '../components/accounts/insertDocument';
class Router extends Component {
  render() {
    return (
      <div  > 
       <Switch>
       <Route path="/" exact component={App} />
        {/* <Route path="/:type" exact render={(props) => (<AuthContainer {...props}  />)}  /> */}
        <Route path="/home" exact component={HomeContainer} />
        <Route path="/login" exact component={AccountUserLogin} />
        <Route path="/changepassword" exact component={AccountUserChangePassword} />
        <Route path="/adduser" exact component={AccountUserAdd} />
        <Route path="/userlist" exact component={HomeUserList}/>
        <Route path="/rolelist" exact component={HomeRoleList}/>
        <Route path="/uploadDocument" exact component={uploadDocument}/>
        <Route path="/usermenu" exact component={HomeUserMenu}/>
      </Switch>
      </div>
    );
  }
}

export default Router;
