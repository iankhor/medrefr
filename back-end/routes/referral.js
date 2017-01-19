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
        referrals.length ? res.json({ message: "No content"}) : res.status(204).json({ message: "No content"})
    })
    .catch( () => {
        res.status(500).json({
            message: "Error : Internal server error"
        })
    }) 
})

// Index: read all
router.post('/', function(req, res, next) {
    res.json(sampleReferral.referral1)

    //     Counter.create({
    //     count: 0
    // })

})

module.exports = router;
