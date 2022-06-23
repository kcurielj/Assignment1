/********************************************************
* File: user.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 23/Jun/22
********************************************************/

let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');


// Routes for sign-up
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Routes for sign-in
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Route for sign-out
router.get('/signout', usersController.signout);

module.exports = router;