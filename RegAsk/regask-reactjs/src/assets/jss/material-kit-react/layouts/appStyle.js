import {
  drawerWidth,
  transition,
  container
} from "../../material-kit-react.js";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    backgroundImage:"url('home.png')",
    backgroundColor: "#fff",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize:"contain"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - 0px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  contentHome: {
	 marginTop: "70px",
     padding: "30px 15px",
	 height: "80vh" 
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
