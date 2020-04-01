const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

router.post("/adduser", passport.authenticate('jwt',{session:false}), (req, res) => {
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

//Authenticate
router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'user not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 //1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.firstname + " " + user.lastname,
            username: user.username,
            userrole: user.role
            //password: user.password
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong Password'});
      }
    });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next) => {
  res.json({user: req.user});

});

router.post("/changePassword", passport.authenticate('jwt',{session:false}), (req, res) => {
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

router.get("/", passport.authenticate('jwt',{session:false}), (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
      res.json({ user: req.user });
  } else {
      res.json({ user: null });
  }
});

router.post("/logout", passport.authenticate('jwt',{session:false}), (req, res) => {
  if (req.user) {
      req.logout();
      res.json({ msg: "logging out" });
  } else {
      res.json({ msg: "no user to log out" });
  }
});

module.exports = router;
