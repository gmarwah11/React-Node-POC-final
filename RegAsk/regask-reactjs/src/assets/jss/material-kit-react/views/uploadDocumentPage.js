import { container } from "../../material-kit-react.js";

const uploadDocumentPageStyle = {
    uploadDocwapper: {
        border: "10px solid #fafafa",
        borderRadius: "10px",
        marginTop: "-50px",
        height: "auto",
        backgroundColor: '#fafafa',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "3px 3px 5px 5px"
    },
    uploadDocinnerwapper: {
        padding: "0px 100px"
    },
    uploadDocHeader: {
        fontSize: "25px",
        fontWeight: "500",
        color: "#34a098",
        textAlign: "center"
    },
    uploadDocFooter: {

    },
    uploadDocBodyLeft: {

    },
    uploadDocBodyLeft: {

    },
    uploadDocbutton: {
        backgroundColor: "#34a098",
        marginLeft: "41%",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            backgroundColor: "#34a098",
            boxShadow:
              "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
          },
    },
    uploadDocerrorMsg: {
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
    uploadDoctext: {

    },
    uploadDoclable: {
        position: "absolute",
        fontWeight: "500"
    },
    uploadDoclocationAU:{
        width: "100%",
        height: "60px",
        marginTop: "25px"
    },
    iconbuttonfile: {
        borderRadius: "20px",
        backgroundColor: "#34A098",
        border: "none",
        color: "white",
        fontSize: "14px",
        width: "95%",
        opacity: "0.4",
        marginTop: "56px",
        marginLeft: "10px"
    },
    require: {
        marginTop: "63px",
        position: "absolute"
    }
};

export default uploadDocumentPageStyle;
