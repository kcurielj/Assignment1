/********************************************************
* File: businesscontacts.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 16/Jun/22
********************************************************/

var express = require('express');
var router = express.Router();

let businesscontactController = require('../controllers/businesscontacts');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }    
    next();
}

/*Get list of businesscontacts*/ 
router.get('/list', requireAuth, businesscontactController.businesscontactsList);

/*Routes for edit page*/ 
router.get('/edit/:id', businesscontactController.displayEditPage);
router.post('/edit/:id', businesscontactController.processEditPage);
router.get('/delete/:id', businesscontactController.performDelete);

module.exports = router;