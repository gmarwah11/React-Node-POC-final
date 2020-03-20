const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passwordValidator = require('password-validator');
const REGASKAADB = require('../../db/common/connection');
const AUTHUSEROPERATION = {
    saltHashObj :{salt:'',hash:''},
    setPasswordHashnSalt: function (password) {
        this.saltHashObj.salt = crypto.randomBytes(16).toString('hex');
        this.saltHashObj.hash = crypto.pbkdf2Sync(password, '', 10000, 512, 'sha512').toString('hex');
        console.log('in auth operation',typeof this.saltHashObj.hash, typeof this.saltHashObj.salt);
        console.log(this.saltHashObj.salt);
        console.log(this.saltHashObj.hash);
        return this.saltHashObj;
    },
    validatePassword: function (password,userDbHash,salt) {
        const hash = crypto.pbkdf2Sync(password, '', 10000, 512, 'sha512').toString('hex'); 
        console.log('local hash',hash);
        console.log('user hash',userDbHash);
        return userDbHash === hash;
    },
    generateJWT: function (email) {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);

        return jwt.sign({
            email: email,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    },
    toAuthJSON: function (email) {
        return {
            email: email,
            token: this.generateJWT(email),
        };
    },
    randomOrTempPasswordGenerate:function(max,min){
        var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
        var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
        var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
        return "TE"+randPassword+"MP";
    },
    validatePasswordbySpecificPattern:function(password){
        var schema = new passwordValidator(); 
        schema
        .is().min(8) // Minimum 8 chars
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits();                                 // Must have digits
          
        // Validate against a password string
        return schema.validate(password); 
    }    

}
module.exports = AUTHUSEROPERATION;