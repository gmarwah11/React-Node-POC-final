import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import FormHelperText from '@material-ui/core/FormHelperText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import UploadPreview from 'material-ui-upload/UploadPreview';
import './assets/insertDocument/star.svg';
import './assets/css/insertDocument.css';
import sessionstorage from "sessionstorage";
import axios, { get, post } from 'axios';
const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
   
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
    
  }));
  function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
  const rows = [
      createData('Frozen yoghurt', 15, 6.0, 24, 4.0),
     
    ];
  class FormPropsTextFields extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        country: "",
        language:"",
        file:"",
        filename:"",
        docId:"",
        title:"",
        type:"",
        decs:"",
        authority:"",
        source:"",
        market:"",
        uploadedBy:sessionstorage.getItem("userName"),
        errMsg: ''
      };
      this.handleLanguage = this.handleLanguage.bind(this);
      this.handleCountry = this.handleCountry.bind(this);
      this.handleFiles = this.handleFiles.bind(this);
      this.handleDocID = this.handleDocID.bind(this);
      this.handleType = this.handleType.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
      this.handleAuthority = this.handleAuthority.bind(this);
      this.handleSource = this.handleSource.bind(this);
      this.handleMarket = this.handleMarket.bind(this);
      this.handleUploadedBy = this.handleUploadedBy.bind(this);
      this.uploadDocument = this.uploadDocument.bind(this);
      
    }
    componentDidMount() {
      var isloggedIn = sessionstorage.getItem("loggedIn");
      if(!isloggedIn || isloggedIn == "false"){
        window.location = '/';
      }
    }
    uploadDocument = () => {
      if(this.state.file == "" || this.state.docId == "" || this.state.title == "" || this.state.type == "" || this.state.authority == "" ||
      this.state.market == "" || this.state.source == "" || this.state.decs == "" || this.state.language == "" || this.state.country == ""){
        this.setState({
          errMsg: "Please fill out mandatory field."
        });
      }else{
        this.setState({
          errMsg: ""
        });
      }
      var data = new FormData();
      data.append("documents", this.state.file);
      // data.append("file", this.state.file);
      data.append("id", this.state.docId);
      data.append("title", this.state.title);
      data.append("description", this.state.decs);
      data.append("type", this.state.type);
      data.append("authority", this.state.authority);
      data.append("source", this.state.source);
      data.append("market", this.state.market);
      data.append("language", this.state.language);
      data.append("country", this.state.country);
      data.append("uploadedBy", 1);
      data.append("uploadDate", new Date());

      axios.post("http://localhost:4000/api/document/upload", data).then(res => {
        console.log("http://localhost:4000/api/document/upload =====> ",res);
        if(res.data.status === "success"){
          alert(res.data.message);
          window.location = '/';
        }else{
          alert(res.data.message);
        }
      });
    }

    handleCountry = (event) => {
      this.setState({country:event.target.value});
    }

    handleLanguage = (event) => {
      this.setState({language:event.target.value});
    }

    handleFiles = (event) => {
      console.log("======>",event.target.files[0]);
      this.setState({file : event.target.files[0]});
      this.setState({filename : event.target.value});
      console.log("======>",event.target.value);
    }
    
    handleDocID = (event) => {
      this.setState({docId:event.target.value});
    }

    handleType = (event) => {
      this.setState({type:event.target.value});
    }
    
    handleTitle = (event) => {
      this.setState({title:event.target.value});
    }

    handleDescription = (event) => {
      this.setState({decs:event.target.value});
    }
    
    handleAuthority = (event) => {
      this.setState({authority:event.target.value});
    }

    handleSource = (event) => {
      this.setState({source:event.target.value});
    }
    
    handleMarket = (event) => {
      this.setState({market:event.target.value});
    }

    handleUploadedBy = (event) => {
      this.setState({uploadedBy:event.target.value});
    }
    
    render(){
    const { classes, ...rest } = this.props;
    return (
      <div class="containter" id="inserDocCon">
      <div id="btable">
           <div id="bleft">
           </div> <div id="logoID"></div></div> 
           <div id="bright"></div>
           <div id="usercenter">
             <center>  
           <div id="insertdocs"><h5>Upload Document</h5> </div></center>
           <div id="docscenter">
      <form className={classes.root} noValidate autoComplete="off" width="550px">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" id="insertdocstable">
        <TableHead></TableHead>
        <TableRow  id="table" cellpadding="10" >
        <TableCell id="left"  cellpadding="10">  
          <TextField required id="standard-required" value={this.state.docId} onChange={this.handleDocID} class="insertdocstextfield"  label=""  placeholder="   Document Id" defaultValue="" ><img src="./src/assets/createaccount/star.svg" alt="golf"/></TextField><br/>
          <TextField required id="standard-required" value={this.state.title} onChange={this.handleTitle} class="insertdocstextfield"   label=""  placeholder="    Title" defaultValue="" /><br/>
          <TextField required id="standard-required" value={this.state.decs} onChange={this.handleDescription} class="insertdocstextfield"  label=""  placeholder="    Description" defaultValue="" /><br/>
          <input accept="*/*" type="file"   id="icon-button-file"  value={this.state.filename} onChange={this.handleFiles}/><br/>
          {/* <TextField required id="standard-required" class="insertdocstextfield"  label=""  placeholder="    Path" defaultValue="" /><br/> */}
          {/* <TextField required id="standard-required" value={this.state.type} onChange={this.handleType} class="insertdocstextfield"  label=""  placeholder="    type" defaultValue="" /><br/> */}
          <TextField required id="standard-required" value={this.state.source} onChange={this.handleSource} class="insertdocstextfield"   label=""  placeholder="    source" defaultValue="" /><br/>
          
          
          </TableCell>
         <TableCell id="right"  cellpadding="10" >
         <br/>
         <TextField required id="standard-required" value={this.state.authority} onChange={this.handleAuthority} class="insertdocstextfieldright"  label=""  placeholder="    authority" defaultValue="" /><br/>
          <TextField required id="standard-required" value={this.state.market} onChange={this.handleMarket} class="insertdocstextfieldright"   label=""  placeholder="    market" defaultValue="" /><br/>
          <FormControl className={classes.formControl} id="select1" >
          <Select value={this.state.language} onChange={this.handleLanguage} displayEmpty className={classes.selectEmpty}>
            <MenuItem value="" disabled>
                Language
            </MenuItem>
            <MenuItem value="hindi">Hindi</MenuItem>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
          </Select>
         
        </FormControl><br/>
        <FormControl className={classes.formControl} id="select1" >
          <Select value={this.state.type} onChange={this.handleType} displayEmpty className={classes.selectEmpty}>
            <MenuItem value="" disabled>
                Type
            </MenuItem>
            <MenuItem value="Report">Report</MenuItem>
            <MenuItem value="Regulation">Regulation</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
         
        </FormControl><br/>
        <FormControl className={classes.formControl} id="select1" >
          <Select value={this.state.country} onChange={this.handleCountry} displayEmpty className={classes.selectEmpty}>
            <MenuItem value="" disabled>
                Country
            </MenuItem>
            <MenuItem value="india">India</MenuItem>
            <MenuItem value="us">US</MenuItem>
            <MenuItem value="singapore">Singapore</MenuItem>
          </Select>
         
        </FormControl><br />
          <TextField required id="standard-required" value={this.state.uploadedBy} onChange={this.handleUploadedBy} class="insertdocstextfieldrightdown"  label=""  placeholder="   Uploaded By" defaultValue="" />
          {/* <TextField required id="standard-required" class="insertdocstextfieldrightdown"  label=""  placeholder="   UploadedDateTime" defaultValue="" /> */}
  </TableCell>
  <div className="errMsgUD">{this.state.errMsg}</div>
  <Button variant="raised"  id="insertdocsbutton" onClick={this.uploadDocument}>Upload</Button>
        </TableRow>
          </Table>
          </TableContainer >
      </form>
   </div>
  </div>
  </div>
    );
  }
}

  FormPropsTextFields.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(useStyles)(FormPropsTextFields);