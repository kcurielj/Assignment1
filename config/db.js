
/********************************************************
* File: db.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 16/Jun/22
********************************************************/
// appuser
// E4j8MMVlWFd0txly
// Do not expose your credentials in the code
let atlasDB = "mongodb+srv://appuser:E4j8MMVlWFd0txly@cluster229-summer22.v7hxe.mongodb.net/BusinessContacts?retryWrites=true&w=majority";

//Database Setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    
    let mongodb = mongoose.connection;
    
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', () =>{
        console.log('Connected to MongoDB...');
    });
    return mongodb;
}