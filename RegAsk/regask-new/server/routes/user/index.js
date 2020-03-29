/* eslint-disable prettier/prettier */
const express = require("express");
const router = express.Router();
const User = require("../../database/models/user");
const bcrypt = require("bcryptjs");
const passport = require("../../passport");
// Define schema
randomOrTempPasswordGenerate = function(max,min){
    var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    console.log("signing user temp password is : ", "TE"+randPassword+"MP");
    return "TE"+randPassword+"MP";
};
router.post("/signup", (req, res) => {
    console.log("user signup");

    const { username, firstname, lastname, phone, location, industry, ex, role, company } = req.body;
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("User.js post error: ", err);
            res.json({
                error: `Something went wrong. Please try again.`
            });
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            });
        } else {
            const newUser = new User({
                username: username,
                password: randomOrTempPasswordGenerate(10,8),
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                ex: ex,
                location: location,
                role: role,
                company: company,
                industry: industry
            });
            newUser.save((err, savedUser) => {
                if (err) {
                    console.log("User.js post error: ", err);
                    return res.json({error: `Something went wrong. Please try again.`});
                }
                res.json(savedUser);
            });
        }
    });
});

router.post("/login", function(req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            userId: req.user._id,
            username: req.user.username
        };
        res.send(userInfo);
    }
);

router.post("/changePassword", (req, res) => {
    const { tempPassword, newPassword, userName } = req.body;
    if (req.user) {
        User.findOne({ username: userName }, (err, user) => {
            if (err) {
                console.log("User.js post error: ", err);
                res.json({ msg: "no user to log out" });
            } else {
                user.password = newPassword;
                user.save((err, savedUser) => {
                    if (err) return res.json(err);
                    res.json(savedUser);
                });
            }
        });
    } else {
        res.json({ msg: "no user to log out" });
    }
});

router.get("/", (req, res, next) => {
    console.log("===== user!!======");
    console.log(req.user);
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.json({ msg: "logging out" });
    } else {
        res.json({ msg: "no user to log out" });
    }
});

module.exports = router;