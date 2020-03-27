const nodeMailer = require('nodemailer');
const express = require('express');
const app = express();
const UserNotificationOperations = {

    sendEmailNotificationofTempPass: function (emailId,tempPassord) {
        console.log('email and password is ', emailId, tempPassord);
         
        var auth =
        {
            user: 'regaskmvp@gmail.com',
            pass: 'regask$123'
        } 
         var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: auth
        });
        console.log('sent');
        const mailOptions = {
            from: 'Regask Super Admin', // sender address
            to: emailId, // list of receivers
            subject: 'Notification Your account has been created in Regask', // Subject line
            html :`<h3>Welcome to RegAsk!</h3>
            <br>
            <span>Please login <a href="https://www.google.com">here</a> using credential below.</span>
            <br><br>
            <span>User :</span> <span>${emailId}</span>
            <br>
            <span>Temporary Password :</span> <span>${tempPassord}</span>
            <br>
            <h3>Thanks</h3>
            <h3>RegAsk Team</h3>` // plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                return err;
            else{
                console.log(info);
                return info;
            }
            
                
        });
        
    }
}
// UserNotificationOperations.sendEmailNotificationofTempPass('regaskmvp@gmail.com', 'TEJatin#MP');
 

module.exports = UserNotificationOperations;
