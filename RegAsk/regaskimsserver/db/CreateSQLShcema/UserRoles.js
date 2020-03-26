const DB = require('../common/connection');
DB.connect((error)=>{
    if(error) throw error;
    console.log('Connected!!');
    var SQLQuery = "CREATE TABLE UserRoles(id int NOT NULL AUTO_INCREMENT,userId int , roleId int NOT NULL ,roleName varchar(255),foreign key (userId) references Users(userId), PRIMARY KEY (id))";
    DB.query(SQLQuery,(err,result)=>{
        if(err) throw err;
        console.log('UserRoles created!!');
    });
});