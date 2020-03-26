const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors'); 
const errorHandler = require('errorhandler');
const morgan_dev = require('morgan')('dev');
const routes = require('./routes/index');
//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Initiate our app
const app = express();

// Configure our app
app.use(cors());
app.use(morgan_dev);
bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(session({secret:'regaskaaserver',cookie:{maxAge:60000},resave:false,saveUninitialized:false}));

if(!isProduction){
    app.use(errorHandler());
}
// Mongoose configure 
const MSQLAADB = require('./db/common/connection');
const USERSCRUD = require('./db/operation/users');
var FindUserObj;
// async function FINDUSER(){
//    return await USERSCRUD.FindUserByEmailID('jatin345anand@gmail.com');   
// }
// FindUserObj = USERSCRUD.FindUserByEmailID('jatin345anand@gmail.com');
// console.log('Find USer',FindUserObj); 
// FindUserObj.then((success)=>{console.log('in success',success)},(error)=>{console.log(error)});
// USERSCRUD.DeleteUser('userId','9');
// Model and Routes
app.use('/',routes);

// 
const err = {error:'error is related to Express',status:'500'};
if(!isProduction){
    app.use(err,(req,res)=>{
      res.status(500).send({
        errors: {
            message: err.message,
            error: err,
          }
      });
    });
}
//swagger

//swagger documentation
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "IMS",
      description: "IMS service",
      contact: {
        name: "Regask"
      },
    }
  },
  // ['.routes/*.js']
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/////////////////////////////////////////////////////////////////////////////
app.listen(4000 || process.env.PORT,(err,data)=>{
   if(err){
       console.log('Error occured in Server Starting');
   }
   console.log('Server has been started on http://localhost:4000');
});