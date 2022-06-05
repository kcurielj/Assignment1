/********************************************************
* File: index.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 04/Jun/22
********************************************************/

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET projects page. */
router.get('/services', indexController.services);

/* GET about page. */
router.get('/about', indexController.about);

/* GET projects page. */
router.get('/projects', indexController.projects);

/* GET about page. */
router.get('/contact', indexController.contact);

module.exports = router;
