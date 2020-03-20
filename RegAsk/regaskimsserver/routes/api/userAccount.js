const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const MYSQLREGASKAADB = require('../../db/common/connection');
const USERSDBOPEARTIONS = require('../../db/operation/users');
const USERAUTHOPERATIONS = require('../../models/auth/authOperation');
const USERNOTIFICATIONOPERATIONS = require('../../models/notification/userNotificationOperation');
router.post('/add', auth.required, (req, res, next) => {
    console.log('in signup new user obj', req.body);
    const { body: { user } } = req;
    const { payload: { email } } = req;

    console.log('in signup new user obj', req.body);
    if (!user.emailId) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.fname) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.lname) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.roleId) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.company) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.country) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }

    // Extract all Request Body JSON Data
    let emaiId = req.body.user.emailId;
    console.log('Email ID ', emaiId);
    let fname = req.body.user.fname;
    console.log('fname ', fname);
    let lname = req.body.user.lname;
    console.log('lname ', lname);
    let password = USERAUTHOPERATIONS.randomOrTempPasswordGenerate(10, 8);
    console.log('PAssword ', password);
    let hashCode = USERAUTHOPERATIONS.setPasswordHashnSalt(password).hash;
    console.log('Hash code ', hashCode);
    let salt = (USERAUTHOPERATIONS.setPasswordHashnSalt(password).salt).toString();
    console.log('Salt ', salt);

    let roleId = req.body.user.roleId;
    console.log('Role ID ', roleId);
    let company = req.body.user.company;
    console.log('Company ', company);
    let country = req.body.user.country;
    console.log('Country ', country);
    let countryCode = req.body.user.countryCode;
    console.log('Country Code ', countryCode);
    let phoneNumber = req.body.user.phoneNumber;
    console.log('phone ', phoneNumber);
    let industry = req.body.user.industry;
    console.log('Industry', industry);
    // let USERDBROWOBJ = USERSDBOPEARTIONS.FindUserByEmailID(emaiId);
    // console.log('user obj is ',USERDBROWOBJ); 
    this.SQLQuery = `SELECT EXISTS(SELECT * FROM users WHERE emailId = '${emaiId}' );`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        console.log('Users Row Find!!', Object.entries(result[0])[0][1]);
        if (Object.entries(result[0])[0][1] > 0) {
            // console.log('id does not exist');
            return res.status(400).send({ message: 'A user with the same email address already exists' });
        }
        // console.log('id does exist');
        USERSDBOPEARTIONS.CreateOrInsertUser(emaiId, fname, lname, hashCode, salt, '0000-00-00', roleId, company, country, countryCode, phoneNumber, industry, false);
        let OutputAddUserNotification = USERNOTIFICATIONOPERATIONS.sendEmailNotificationofTempPass(emaiId, password);
        console.log('Sign up Successfully ', OutputAddUserNotification);
        let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(email);
        OutputAddUserToken.message = 'Add user Successfully';
        res.status(200).send(OutputAddUserToken);

    });
});
router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
    console.log('req in login', req.body);

    if (!user.emailId) {
        return res.status(422).json({
            errors: {
                message: 'Please enter your email address.',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                message: 'Please enter your password.',
            },
        });
    }

    let emaiId = req.body.user.emailId;
    console.log('Email ID ', emaiId);
    let password = req.body.user.password;
    console.log('PAssword ', password)
    if (password.includes('TE') && password.includes('MP')) {
        console.log('Temp Password');
        this.SQLQuery = `SELECT * FROM Users WHERE emailId = '${emaiId}';`
        console.log(this.SQLQuery);
        MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
            if (err) {
                return res.status(400).send({ message: 'Something went wrong. Please try again.' });
            }
            console.log('Users Row Find!!', result[0]);
            this.USEROBJ = result[0];
            if (!result[0] || !USERAUTHOPERATIONS.validatePassword(password, result[0].hashCode, result[0].salt)) {
                return res.status(400).send({ message: 'The email or password you entered is incorrect. Please try again.' });
            }
            let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emaiId);
            OutputAddUserToken.message = "Your emailID and Temporary Password is Correct. Please create new Password";
            console.log('Log in Successfully ', OutputAddUserToken);
            return res.status(301).send(OutputAddUserToken);
        });
    }
    else {
        const today = new Date();
        let date = today.getFullYear() + "-" + (today.getMonth()+1)  + "-" + today.getDate() + '';
        this.SQLQuery = `SELECT * FROM Users WHERE emailId = '${emaiId}';`
        console.log(this.SQLQuery);
        MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
            if (err) {
                return res.status(400).send({ message: 'Something went wrong. Please try again.' });
            }
            console.log('Users Row Find!!', result[0]);
            this.USEROBJ = result[0];
            if (!result[0] || !USERAUTHOPERATIONS.validatePassword(password, result[0].hashCode, result[0].salt)) {
                return res.status(400).send({ message: 'The email or password you entered is incorrect. Please try again.' });
            }
            let ActiveQuery = `UPDATE users SET lastLogin = '${date}',active = true WHERE emailId = '${emaiId}';`
            console.log('Final Login Query ',ActiveQuery);
            MYSQLREGASKAADB.query(ActiveQuery, (e, r) => {
                if (err) {
                    return res.status(400).send({ message: 'Something went wrong. Please try again.' });
                }
                let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emaiId);
                console.log('result ',r);   
                if (r.changedRows == 0) {
                    OutputAddUserToken.message = "Your emailID and Temporary Password is Correct. You can not redirect to HOME.";
                    console.log('Log in Successfully ', OutputAddUserToken);
                    return res.status(301).send(OutputAddUserToken);
                }
                OutputAddUserToken.message = "Your emailID and Updated Password is Correct. Please redirect to HOME.";
                console.log('Log in Successfully ', OutputAddUserToken);
                return res.status(301).send(OutputAddUserToken);
            });

        });
    }

});
router.post('/createPassword', auth.required, (req, res, next) => {
    console.log('req in create PAssword', req.body);
    const { body: { user } } = req;
    const { payload: { email } } = req;

    if (!user.password) {
        return res.status(422).json({
            errors: {
                email: 'Please enter your password',
            },
        });
    }
    let password = req.body.user.password;
    console.log('PAssword ', password, ' email', email);
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!re.test(password)) {
        return res.status(422).json({
            errors: {
                password: 'Please enter a password meeting the format requirements',
            },
        });
    }
    let emailId = email;
    console.log('Email ID ', emailId);

    let hashCode = USERAUTHOPERATIONS.setPasswordHashnSalt(password).hash;
    console.log('Hash code ', hashCode);
    let salt = (USERAUTHOPERATIONS.setPasswordHashnSalt(password).salt).toString();
    console.log('Salt ', salt);
    this.SQLQuery = `UPDATE users SET hashCode = '${hashCode}', salt = '${salt}' WHERE emailId = '${emailId}';`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emailId);
        OutputAddUserToken.message = "Your password has been changed";
        console.log('Password Change Successfully ', OutputAddUserToken);
        return res.status(200).send(OutputAddUserToken);
    });
});
router.get('/list', auth.required, (req, res, next) => {
    console.log('in list', req);
    const { payload: { email } } = req;
    let emailId = email;
    console.log('Email ID ', emailId);
    this.SQLQuery = `SELECT * FROM users WHERE emailId = '${emailId}';`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            // console.error('error connecting: ' + err.stack);
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emailId);
        OutputAddUserToken.message = "Your list is fetched";
        MYSQLREGASKAADB.query(`SELECT * FROM users`, (e, r) => {
            if (e) {
                // console.error('error connecting: ' + e.stack);
                return res.status(400).send({ message: 'Something went wrong. Please try again.' });
            }
            OutputAddUserToken.data = r;
            console.log('Fetch Successfully ', OutputAddUserToken);
            return res.status(200).send(OutputAddUserToken);
        });

    });
});
router.get('/roles', auth.required, (req, res, next) => {
    console.log('in roles', req);
    const { payload: { email } } = req;
    let emailId = email;
    console.log('Email ID ', emailId);
    this.SQLQuery = `SELECT * FROM users WHERE emailId = '${emailId}';`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            // console.error('error connecting: ' + err.stack);
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emailId);
        OutputAddUserToken.message = "Your list is fetched";
        MYSQLREGASKAADB.query(`SELECT * FROM roles`, (e, r) => {
            if (e) {
                // console.error('error connecting: ' + e.stack);
                return res.status(400).send({ message: 'Something went wrong. Please try again.' });
            }
            OutputAddUserToken.data = r;
            console.log('Fetch Successfully ', OutputAddUserToken);
            return res.status(200).send(OutputAddUserToken);
        });

    });
});

router.post('/delete', auth.required, (req, res, next) => {
    console.log('in delete', req.body);
    const { payload: { email } } = req;
    let emailId = email;
    console.log('Email ID ', emailId);
    const { body: { user } } = req;

    if (!user.key) {
        return res.status(422).json({
            errors: {
                message: 'Please enter your Condition Key',
            },
        });
    }
    if (!user.value) {
        return res.status(422).json({
            errors: {
                message: 'Please enter your Condition Value',
            },
        });
    }
    let conditionKey = req.body.user.key;
    let conditionValue = req.body.user.value;
    console.log('K and V ', conditionKey, conditionValue);
    this.SQLQuery = `SELECT * FROM users WHERE emailId = '${emailId}';`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            // console.error('error connecting: ' + err.stack);
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        // console.log('Result ',result[0]);
        if (result[0] == undefined) {
            // console.log('id does not exist');
            return res.status(400).send({ message: 'Sorry, You are unauthorized!! Your Token is Incorrect' });
        }
        let OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emailId);
        let DeleteQuery = `DELETE FROM Users WHERE ${conditionKey} = '${conditionValue}';`
        if (conditionKey === 'active' || conditionKey === 'roleId' || conditionKey === 'userId') {
            DeleteQuery = `DELETE FROM Users WHERE ${conditionKey} = ${conditionValue};`
        }

        console.log(DeleteQuery);
        MYSQLREGASKAADB.query(DeleteQuery, (e, r) => {
            if (e) {
                console.error('error connecting: ' + e.stack);
                return res.status(400).send({ message: 'Something went wrong. Please try again.' });
            }
            console.log('Delete ', r);
            OutputAddUserToken.message = "Delete Unsuccessfully";
            if (r.affectedRows > 0) {
                OutputAddUserToken.message = "Delete Successfully";
            }
            console.log('Delete Successfully ', OutputAddUserToken);
            return res.status(200).send(OutputAddUserToken);
        });

    });
});
router.get('/logout', auth.required, (req, res, next) => {
    // console.log('in roles',req);
    const { payload: { email } } = req;
    let emailId = email;

    console.log('Email ID ', emailId);
    this.SQLQuery = `UPDATE users SET active = false WHERE emailId = '${emailId}';`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            // console.error('error connecting: ' + err.stack);
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        let OutputAddUserToken = {};

        console.log('affected row', result.changedRows);
        if (result.changedRows == 0) {
            console.log('affected row', result.affectedRows);
            OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emailId);
            OutputAddUserToken.message = "You are Log Out Unsuccess Fully";
            return res.status(200).send(OutputAddUserToken);
        }
        OutputAddUserToken.message = "You are Log Out Success Fully. Go to Login";

        return res.status(200).send(OutputAddUserToken);
    });

});
router.post('/deactivate', auth.required, (req, res, next) => {
    // console.log('in roles',req);
    const { payload: { email } } = req;
    const { body: { user } } = req;
    let emailId = email;
    if (!user.emailId) {
        return res.status(422).json({
            errors: {
                message: 'Please enter your Email ID',
            },
        });
    }
    let deactivateEmailID = req.body.user.emailId;
    console.log('Deactivate Email ID ', deactivateEmailID);
    this.SQLQuery = `SELECT * FROM users WHERE emailId = '${emailId}';`
    console.log(this.SQLQuery);
    MYSQLREGASKAADB.query(this.SQLQuery, (err, result) => {
        if (err) {
            // console.error('error connecting: ' + err.stack);
            return res.status(400).send({ message: 'Something went wrong. Please try again.' });
        }
        if (result == undefined) {
            return res.status(400).send({ message: "You are unauthorized. You can not Deactivate User" });
        }
        let deactivateQuery = `UPDATE users SET active = false WHERE emailId = '${deactivateEmailID}';`

        MYSQLREGASKAADB.query(deactivateQuery, (e, r) => {
            if (e) {
                return res.status(400).send({ message: 'Something went wrong. Please try again.' });
            }
            let OutputAddUserToken = {};
            console.log('affected row', r.changedRows);
            if (r.changedRows == 0) {
                // console.log('affected row', result.affectedRows);
                OutputAddUserToken = USERAUTHOPERATIONS.toAuthJSON(emailId);
                OutputAddUserToken.message = "Deactivate User Unsuccess Fully";
                return res.status(200).send(OutputAddUserToken);
            }

            OutputAddUserToken.message = "Deactivate User Success Fully";

            return res.status(200).send(OutputAddUserToken);
        });


    });

});
module.exports = router;