import {
  container,
  defaultFont,
  titleFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "../../material-kit-react.js";

const headerStyle = theme => ({
  appBar: {
    backgroundImage:"url('headerBG.png')",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize:"50% 100%",
    backgroundColor:"#fff",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "fixed",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: "#ffffff",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: {
    ...container,
    minHeight: "50px"
  },
  flex: {
    flex: 1
  },
  title: {
    ...titleFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "#000",
    marginLeft: "245px",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  }
});

export default headerStyle;
