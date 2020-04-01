import { container } from "../../material-kit-react.js";

const signupPageStyle = {
    signupwapper: {
        border: "10px solid #fafafa",
        borderRadius: "10px",
        marginTop: "0px",
        height: "auto",
        backgroundColor: '#fafafa',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "3px 3px 5px 5px"
    },
    signupinnerwapper: {
        padding: "0px 100px"
    },
    signupHeader: {
        fontSize: "25px",
        fontWeight: "500",
        color: "#34a098",
        textAlign: "center"
    },
    signupFooter: {

    },
    signupBodyLeft: {

    },
    signupBodyLeft: {

    },
    signupbutton: {
        height: "20px",
        lineHeight: "0.333333",
        backgroundColor: "#34a098",
        marginLeft: "41%",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            backgroundColor: "#34a098",
            boxShadow:
              "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
          },
    },
    signuperrorMsg: {
        color: "red",
        fontSize: "15px",
        fontWeight: "500"
    },
    brandwapper: {
        paddingTop: "15%",
    },
    brandImage: {
        width: "220px"
    },
    navLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
          color: "inherit",
          background: "rgba(200, 200, 200, 0.2)"
        },
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
        "& > span:first-child": {
            justifyContent: "flex-start"
        }
    },
    signuptext: {

    },
    signuplable: {
        position: "absolute",
        fontWeight: "500"
    },
    signuplocationAU:{
        width: "100%",
        height: "60px",
        marginTop: "25px"
    }
};

export default signupPageStyle;
