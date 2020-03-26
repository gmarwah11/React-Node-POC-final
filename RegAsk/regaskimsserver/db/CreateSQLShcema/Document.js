const DB = require('../common/connection');

DB.connect((error)=>{
    if(error) throw error;
    console.log('Connected!!'); 
    var SQLQuery = "CREATE TABLE Documents(id int NOT NULL AUTO_INCREMENT,title TEXT,description MEDIUMTEXT,path varchar(255),country  varchar(255),uploadedBy int,foreign key (uploadedBy) references Users(userId),created varchar(255), PRIMARY KEY (id))";
    DB.query(SQLQuery,(err,result)=>{
        if(err) throw err;
        console.log('Document created!!');
    });
});