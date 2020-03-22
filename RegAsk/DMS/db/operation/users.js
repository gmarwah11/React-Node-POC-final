const mysql = require('mysql');
const con = require('../common/connection')
 
con.connect(function(err) {
    if (err) throw err;
    var sql = 'CREATE TABLE Documents(id int NOT NULL AUTO_INCREMENT,title TEXT,description MEDIUMTEXT,filename varchar(255),fileextension varchar(255),path varchar(255),type varchar(255),authority varchar(255),source varchar(255),market varchar(255),language varchar(255),country  varchar(255),uploadedBy int,uploadedDateTime DATETIME NOT NULL,PRIMARY KEY (id))';
    con.query(sql, function (err, result) {
      if (err) throw err;
    });
  });
