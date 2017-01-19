const sampleReferral = require('./_sample-referrals.js')

const express = require('express');
const Referral = require('../models/Referral');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    Referral.find()
    .then( referrals => {
        // res.json(referrals)
        console.log(referrals.length)
        referrals.length ? res.json({ referrals }) : res.status(204).json({ message: "No content"})
    })
    .catch( () => {
        res.status(500).json({
            message: "Error : Unable to get all referrals"
        })
    }) 
})

// Index: read all
router.post('/', function(req, res, next) {
    console.log( sampleReferral )
    // console.log(typeof { 
    //         patientSurname:             "surname",               
    //         patientgivenName:           "giveName", 
    //     })

    Referral.create( sampleReferral.referral1 )
    .then( referral => {
        res.json(referral) 
    })
    .catch( () => {
        res.status(500).json({
            message: "Error : Unable to create referral in db"
        })
    })

})

module.exports = router;
