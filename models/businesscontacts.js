
/********************************************************
* File: businesscontacts.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 16/Jun/22
********************************************************/

let mongoose = require('mongoose');

let businesscontactsModel = mongoose.Schema(
    {
        name: String,
        email: String,
        number: String
    },
    {
        collection: "BusinessContacts"
    }
);

module.exports = mongoose.model('contacts', businesscontactsModel);