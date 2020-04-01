const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    firstname: { type: String, unique: false, required: false },
    lastname: { type: String, unique: false, required: false },
    ex: { type: String, unique: false, required: false },
    phone: { type: String, unique: false, required: false },
    location: { type: String, unique: false, required: false },
    industry: { type: String, unique: false, required: false },
    role: { type: String, unique: false, required: false },
    company: { type: String, unique: false, required: false }
});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback){
  User.findById(id,callback);
}

module.exports.getUserByUsername = function(username,callback){
  const query = {username: username}
  User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10,(err,salt) =>{
    bcrypt.hash(newUser.password,salt, (err, hash)=>{
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword =  function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err,isMatch) => {
    if(err) throw err;
    callback(null, isMatch);

  });
}
