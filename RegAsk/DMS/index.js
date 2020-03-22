const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const routes = require('./routes/index')

app.use(express.json({limit: '1000mb'}));
app.use(express.urlencoded({limit: '1000mb'}));
//serving static files
app.use(express.static('public'))
const errorHandler = require('errorhandler');
//
var mysql = require('mysql');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const isProduction = process.env.NODE_ENV === 'production';

//swagger documentation
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "DMS",
      description: "DocumentManagementService",
      contact: {
        name: "Regask"
      },
    }
  },
  // ['.routes/*.js']
  apis: ["./routes/api/Swagger/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// // import routes
// require('./routes/routes')(app);

if(!isProduction){
  app.use(errorHandler());
}

// Elasticsearch
require("./routes/api/elasticsearch/elasticsearch")();

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

app.use('/',routes)

app.listen(4000 || process.env.PORT,(err,data)=>{
  if(err){
      console.log('Error occured in Server Starting');
  }
  console.log('Server has been started on http://localhost:4000');
});
