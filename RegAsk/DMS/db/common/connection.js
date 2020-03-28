const mysql = require('mysql');
const config = require('./config')
const connection = mysql.createConnection(config);
// const connection = mysql.createConnection('mysql://root:root@localhost:3306/regask_dms?debug=true');
module.exports = connection;