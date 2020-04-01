
import { container } from "../../material-kit-react.js";

const changePasswordPageStyle = {
    confirmpasswordwapper: {
        border: "10px solid #eee",
        borderRadius: "10px",
        marginTop: "-75px",
        height: "auto",
        backgroundColor: '#eee',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "3px 3px 5px 5px"
    },
    confirmpasswordinnerwapper: {
        padding: "0px 100px"
    },
    confirmpasswordbutton: {
        height: "20px",
        lineHeight: "0.333333",
        backgroundColor: "#34a098",
        marginLeft: "35%",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            backgroundColor: "#34a098",
            boxShadow:
              "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
          },
    },
    confirmpasswordErrorMsg: {
        color: "red",
        fontSize: "15px",
        fontWeight: "500"
    },
    brandwapper: {
        paddingTop: "15%",
    },
    brandImage: {
        width: "220px"
    }
};

export default changePasswordPageStyle;
