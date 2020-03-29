const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const PORT = 4040;
// Route requires
// const user = require("./routes/user");
app.use(express.static('public'));

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//swagger documentation
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "IMS",
      description: "IdentityManagementService",
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

// Sessions
app.use(
    session({
        secret: "regask-software", //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false //required
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use('/', require("./routes/index"))
app.use("/user", require("./routes/user/index"));

// Starting Server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});