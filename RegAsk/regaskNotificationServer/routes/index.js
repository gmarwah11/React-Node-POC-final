const express = require('express');
const router = express.Router(); 
const emailConfig = require('../config/mailConfig');
const nodeMailer = require('nodemailer');
const notificationOperation = require('../models/notification/userNotificationOperation');
router.post('/sendEmail',async (req, res, next) => {
    const { body: { user } } = req;
    console.log('body is', req.body);
    if (!user.emailId) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.subject) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    }
    if (!user.tempPassword) {
        return res.status(422).json({
            errors: {
                message: 'Please fill out this field.',
            },
        });
    } 
    let emailId = req.body.user.emailId;
    let subject = req.body.user.tempPassword;
    let tempPassword = req.body.user.tempPassword; 
    let linkURL = emailConfig.link;
    var regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!regexEmail.test(emailId)) {
        return res.status(422).json({
            errors: {
                password: 'Please enter a password meeting the format requirements',
            },
        });
    }
    let info = await notificationOperation.sendEmailNotificationofTempPass(linkURL,emailId,subject,tempPassword);
    return res.status(200).json(info);
  
});
module.exports = router;