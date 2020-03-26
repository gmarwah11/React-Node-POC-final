const DB = require('../common/connection');
DB.connect((err)=>{
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
    
      console.log('connected as id ' + DB.threadId);
    // if(error) throw error;
    // console.log('Connected!!');
    
    var SQLQuery =  "CREATE TABLE Users(userId int NOT NULL AUTO_INCREMENT,emailId varchar(255) NOT NULL,FirstName varchar(255),LastName varchar(255),hashCode LONGTEXT,salt MEDIUMTEXT,lastLogin Date NOT NULL,roleId int,	company varchar(255),country varchar(255),phonePrefix varchar(255),phoneNumber varchar(255), industry varchar(255),active BOOLEAN, PRIMARY KEY (userId))";
    DB.query(SQLQuery,(err,result)=>{
        if(err) throw err;
        console.log('Users created!!');
    });
});