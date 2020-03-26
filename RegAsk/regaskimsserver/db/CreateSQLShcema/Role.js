const DB = require('../common/connection');

DB.connect((error)=>{
    if(error) throw error;
    console.log('Connected!!');
    var SQLQuery =  "CREATE TABLE Roles(id int NOT NULL AUTO_INCREMENT, roleName varchar(255), PRIMARY KEY (id))";
    DB.query(SQLQuery,(err,result)=>{
        if(err) throw err;
        console.log('Roles created!!');
    });
});
 