/********************************************************
* File: passport.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 23/Jun/22
********************************************************/

const passport = require('passport');

module.exports = function() {
  const User = require('../models/user');
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  require('./local')();
};