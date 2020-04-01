import HomePage from "../basicComponents/home.js";
import LoginPage from "../basicComponents/loginPage.js";
import SignupPage from "../basicComponents/signupPage.js";
import UploadDocumentPage from "../basicComponents/uploadDocument.js";
import ChangePasswordPage from "../basicComponents/changePassword.js";

import Home from "@material-ui/icons/Home";
import LockOpen from "@material-ui/icons/LockOpen";
import HowToReg from "@material-ui/icons/HowToReg";
import CloudDownload from "@material-ui/icons/CloudDownload";

const appRoutes = [
  // {
  //   path: "/",
  //   sidebarName: "Home",
  //   navbarName: "../assets/img/brand.png",
  //   icon: Home,
  //   component: HomePage,
	//   showAfterlogin: true
  // },
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "../assets/img/brand.png",
    icon: Home,
    component: HomePage,
	  showAfterlogin: true
  },
  {
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: LockOpen,
    component: LoginPage,
	  showAfterlogin: false
  },
  {
    path: "/addUser",
    sidebarName: "addUser",
    navbarName: "Add User",
    icon: HowToReg,
    component: SignupPage,
	  showAfterlogin: true
  },
  {
    path: "/uploadDocument",
    sidebarName: "Upload Document",
    navbarName: "Upload Document",
    icon: CloudDownload,
    component: UploadDocumentPage,
	  showAfterlogin: true
  },
  {
    path: "/changePassword",
    sidebarName: "Change Password",
    navbarName: "Change Password",
    icon: CloudDownload,
    component: ChangePasswordPage,
	  showAfterlogin: true
  }
];

export default appRoutes;
