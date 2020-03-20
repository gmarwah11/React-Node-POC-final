const DB = require('../common/connection');
const UserTableCRUD = {
    emailId: '',
    fname: '',
    lname:'',
    hashCode: '',
    salt: '',
    lastLogin: '0000-00-00',
    roleId:-1,
    company:'',
    country:'',
    phonePrefix:'',
    phoneNumber:'',
    industry:'',
    active: false,
    USEROBJ:null,
    SQLQuery: `INSERT INTO Users(emailId,FirstName,LastName,hashCode,salt,lastLogin,roleId,company,country,phonePrefix,phoneNumber,industry,active) VALUES ("${this.emailId}","${this.fname}","${this.lname}","${this.hashCode}","${this.salt}","${this.lastLogin}",${this.roleId},"${this.company}","${this.country}","${this.phonePrefix}","${this.phonePrefix}","${this.industry}",${this.active})`,
    CreateOrInsertUser: function (emailId, fname,lname, hashCode, salt, lastLogin,roleId,company,country,phonePrefix,phoneNumber,industry, active) {
        // console.log(emailId, name, hashCode, salt, lastLogin, type, active);
        this.emailId = emailId;
        this.fname = fname;
        this.lname = lname;
        this.hashCode = hashCode;
        this.salt = salt;
        this.lastLogin = lastLogin;
        this.roleId = roleId;
        this.company = company;
        this.country = country;
        this.phonePrefix = phonePrefix;
        this.phoneNumber = phoneNumber;
        this.industry = industry; 
        this.active = active;
        this.SQLQuery = `INSERT INTO Users(emailId,FirstName,LastName,hashCode,salt,lastLogin,roleId,company,country,phonePrefix,phoneNumber,industry,active) VALUES ("${this.emailId}","${this.fname}","${this.lname}","${this.hashCode}","${this.salt}","${this.lastLogin}",${this.roleId},"${this.company}","${this.country}","${this.phonePrefix}","${this.phoneNumber}","${this.industry}",${this.active})`;
        DB.query(this.SQLQuery, (err, result) => {
            if (err) throw err;
            console.log('Users Row inserted!!');
        });

    },
    DeleteUser: function (conditionKey, conditionValue) {
        this.SQLQuery = `DELETE FROM Users WHERE ${conditionKey} = ${conditionValue}`;
        console.log(this.SQLQuery);
        DB.query(this.SQLQuery, (err, result) => {
            if (err) throw err;
            console.log('Users Row deleted!!');
        });
    },
    FindUserByEmailID: function(emailId){
        this.SQLQuery = `SELECT * FROM Users WHERE emailId = '${emailId}';`
        console.log(this.SQLQuery);
        // DB.query(this.SQLQuery);
        DB.query(this.SQLQuery, (err, result) => {
            if (err) throw err;
            console.log('Users Row Find!!',result[0]);
            this.USEROBJ = result[0];
            return result[0];
        });
        return this.USEROBJ;
    }
}
module.exports = UserTableCRUD;