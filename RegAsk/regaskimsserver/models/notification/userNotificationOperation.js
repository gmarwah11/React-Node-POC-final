const nodeMailer = require('nodemailer');
const express = require('express');
const app = express();
const UserNotificationOperations = {

    sendEmailNotificationofTempPass: function (emailId,tempPassord) {
        console.log('email and password is ', emailId, tempPassord);
        // var auth = {
        //     type: 'oauth2',
        //     user: 'jatin345anand@gmail.com',
        //     clientId: '221886488437-ho69g5pdecvbkcd7b8k2kc17sntbpv42.apps.googleusercontent.com',
        //     clientSecret: 'h-jbtZhWhZHNVDZ3agZ95KI9',
        //     refreshToken: '1//043COHxT4m3YACgYIARAAGAQSNwF-L9IrQ7wmOq8q2ke6jhRaoY0iBJlgO1CrN6D61tV9HMDUWf6HDW_s0H0u9Rt4Yf-7U_iOnVY',
        // }
        var auth =
        {
            user: 'regaskmvp@gmail.com',
            pass: 'regask$123'
        }
        // var auth =
        // {
        //     user: 'jatin345anand@gmail.com',
        //     pass: 'MarutiJatin#'
        // }
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
// UserNotificationOperations.sendEmailNotificationofTempPass('jatin345anand@gmail.com', 'TEJatin#MP');
// UserNotificationOperations.sendEmailNotificationofTempPass('javatomcat36@gmail.com', 'TEJatin#MP');

module.exports = UserNotificationOperations;