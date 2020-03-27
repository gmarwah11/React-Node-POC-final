import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
  export default function FormPropsTextFields() {
    const classes = useStyles();
   
    const [country, setCountry] = React.useState('');
    const handleChange = event => {
      setCountry(event.target.value);
    };
    return (
      <div class="containter">
      <div id="btable">
           <div id="bleft">
           </div> <div id="logo"></div></div> 
           <div id="bright"></div>
           <div id="usercenter">
             <center>  
           <div id="insertdocs"><h5>Insert Documents</h5> </div></center>
           <div id="docscenter">
      <form className={classes.root} noValidate autoComplete="off" width="550px">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" id="insertdocstable">
        <TableHead></TableHead>
        <TableRow  id="table" cellpadding="10" >
        <TableCell id="left"  cellpadding="10">  
          <TextField required id="standard-required" class="insertdocstextfield"  label=""  placeholder="   Document Id" defaultValue="" ><img src="./src/assets/createaccount/star.svg" alt="golf"/></TextField><br/>
          <TextField required id="standard-required" class="insertdocstextfield"   label=""  placeholder="    Title" defaultValue="" /><br/>
          <TextField required id="standard-required" class="insertdocstextfield"  label=""  placeholder="    Description" defaultValue="" /><br/>
          <TextField required id="standard-required" class="insertdocstextfield"  label=""  placeholder="    Path" defaultValue="" /><br/>
          <TextField required id="standard-required" class="insertdocstextfield"  label=""  placeholder="    type" defaultValue="" /><br/>
          <TextField required id="standard-required" class="insertdocstextfield"  label=""  placeholder="    authority" defaultValue="" /><br/>
          
          </TableCell>
         <TableCell id="right"  cellpadding="10" >
         <br/>
         <TextField required id="standard-required" class="insertdocstextfieldright"   label=""  placeholder="    source" defaultValue="" /><br/>
          <TextField required id="standard-required" class="insertdocstextfieldright"   label=""  placeholder="    market" defaultValue="" /><br/>
          <FormControl className={classes.formControl} id="select1" >
          <Select value={country} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
            <MenuItem value="" disabled>
                Language
            </MenuItem>
            <MenuItem value={10}>Hindi</MenuItem>
            <MenuItem value={20}>English</MenuItem>
            <MenuItem value={30}>Punjabi</MenuItem>
          </Select>
         
        </FormControl><br/>
        <FormControl className={classes.formControl} id="select1" >
          <Select value={country} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
            <MenuItem value="" disabled>
                Country
            </MenuItem>
            <MenuItem value={10}>India</MenuItem>
            <MenuItem value={20}>Us</MenuItem>
            <MenuItem value={30}>America</MenuItem>
          </Select>
         
        </FormControl>
          <TextField required id="standard-required" class="insertdocstextfieldrightdown"  label=""  placeholder="   Uploaded By" defaultValue="" />
          <TextField required id="standard-required" class="insertdocstextfieldrightdown"  label=""  placeholder="   UploadedDateTime" defaultValue="" />
  </TableCell>
  <input accept="image/*" type="file"    style={{display:'none'}}        id="icon-button-file" />
  <Button variant="raised"  id="insertdocsbutton" ><label htmlFor="icon-button-file" >Upload </label></Button>
        </TableRow>
          </Table>
          </TableContainer >
      </form>
   </div>
  </div>
  </div>
    );
  }