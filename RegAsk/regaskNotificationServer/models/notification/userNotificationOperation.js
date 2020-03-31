const nodeMailer = require('nodemailer');
const express = require('express');
const app = express();
const xoauth2 = require('xoauth2');
const emailConfig = require('../../config/mailConfig');
const UserNotificationOperations = {

     sendEmailNotificationofTempPass: async  function (link,emailId, subject,tempPassord) {
        console.log('email and password is ', emailId, tempPassord);
        var auth1 ={
            xoauth2: xoauth2.createXOAuth2Generator({
                user:emailConfig.userEmailId,
                clientId:emailConfig.clientId,  
                clientSecret:emailConfig.clientSecret,
                refreshToken:emailConfig.refreshToken

            })
        }; 
        var auth2 =
        {
            user: emailConfig.userEmailId,
            pass: emailConfig.password 
        };
        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: auth2
        });
        // TEnfK/uQlDMP
        console.log('sent');
        
        const mailOptions = {
            from: 'Regask Super Admin', // sender address
            to: emailId, // list of receivers
            cc:emailConfig.userEmailId,
            subject: subject, // Subject line
            html: `<h3>Welcome to RegAsk!</h3>
            <br>
            <span>Please login <a href=${link}>here</a> using credential below.</span>
            <br><br>
            <span>User :</span> <span>${emailId}</span>
            <br>
            <span>Temporary Password :</span> <span>${tempPassord}</span>
            <br>
            <h3>Thanks</h3>
            <h3>RegAsk Team</h3>` // plain text body
        };
        let info = await transporter.sendMail(mailOptions);
        console.log('messageid is ',info.messageId);
        console.log('text mwssage',nodeMailer.getTestMessageUrl(info));
        return info;
    }
}
// UserNotificationOperations.sendEmailNotificationofTempPass('regaskmvp@gmail.com', 'TEJatin#MP');
// UserNotificationOperations.sendEmailNotificationofTempPass('jatin345anand@gmail.com', 'TEJatin#MP');
// UserNotificationOperations.sendEmailNotificationofTempPass('javatomcat36@gmail.com', 'TEJatin#MP');

module.exports = UserNotificationOperations;