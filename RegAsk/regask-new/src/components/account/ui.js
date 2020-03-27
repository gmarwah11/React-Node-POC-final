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

import './src/assets/createaccount/star.svg'
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


  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (

    



    <div class="containter">
    <div id="btable">
         <div id="bleft">
         </div> <div id="logo"></div></div> 
         <div id="bright"></div>
         <div id="usercenter">
           <center>  
         <div id="createaccount"> </div></center>
         <div id="center">
       




    
    <form className={classes.root} noValidate autoComplete="off">
 
      <div>



      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" id="table">
      <TableHead></TableHead>
      <TableRow  id="table" cellpadding="10" >
      <TableCell id="left"  cellpadding="10">
          
        <TextField required id="standard-required" class="textfield"  label=""  placeholder="   First Name" defaultValue="" ><img src="./src/assets/createaccount/star.svg" alt="golf"/></TextField><br/>
        <TextField required id="standard-required" class="textfield"  label=""  placeholder="   Email Address" defaultValue="" /><br/>
        <TextField required id="standard-required" class="textfield"  label=""  placeholder="    Company Name" defaultValue="" /><br/>
        <InputLabel htmlFor="input-with-icon-adornment"  id="phonenumber" ></InputLabel>
        <TextField required id="standard-required" class="textfield2"  label=""  placeholder="  Ex" defaultValue="" />
        <TextField required id="standard-required" id="phone" class="textfield3"  label=""  placeholder=" Number" defaultValue="" />
      
        </TableCell>
       

<TableCell id="right"  cellpadding="10" >

<TextField required id="standard-required" class="textfield"  label=""  placeholder="    Last Name" defaultValue="" /><br/>
        <TextField required id="standard-required" class="textfield"  label=""  placeholder="    Role" defaultValue="" /><br/>
     

       





        <FormControl className={classes.formControl} id="select1" >
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
              Location
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      </FormControl><br/>


      <FormControl className={classes.formControl} id="select2" >
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}  >
          <MenuItem value="" disabled>
            Industry
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      </FormControl>

      </TableCell>  <p id="mandatory"></p>
     <button id="button2" type="submit"><b>Create</b></button>
      </TableRow>
        </Table>
        </TableContainer >














       
      
    
       
      </div>
      


    
     
    </form>




    
   
              
         
                
                </div>
                
     
         
       </div>
          
     
       </div>
  );
}