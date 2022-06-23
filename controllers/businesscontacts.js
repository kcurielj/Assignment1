/********************************************************
* File: businesscontacts.js
* Student: Kevin Eduardo Curiel Justo
* ID: 301214229
* Date: 16/Jun/22
********************************************************/

//Create reference to the model

const { off } = require('../models/businesscontacts');
let businesscontactsModel = require('../models/businesscontacts');

module.exports.businesscontactsList = function(req, res, next){
    businesscontactsModel.find((err, businesscontactsList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(businesscontactsList);
            res.render('businesscontacts/list', {
               title: 'Business Contacts',
               businesscontactsList: businesscontactsList
            })
        }
    })
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    businesscontactsModel.findById(id, (err, businesscontactToEdit) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        else{
            res.render('businesscontacts/edit', {
                title: 'Edit Item',
                item: businesscontactToEdit,
                userName: req.user ? req.user.userName : ''
            })
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedItem = businesscontactsModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
        
    });

    console.log(updatedItem);

    businesscontactsModel.updateOne({_id: id}, updatedItem, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/businesscontacts/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    businesscontactsModel.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/businesscontacts/list');
        }
    })
}
