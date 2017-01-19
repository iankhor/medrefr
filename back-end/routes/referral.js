const sampleReferral = require('./_sample-referrals.js')

const express = require('express');
const Referral = require('../models/Referral');

const router = express.Router();

// get all referrrals
router.get('/all', function(req, res, next) {
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

// get that one referral by id
router.get('/:id', function(req, res, next) {
    const { id } = req.params

    Referral.findById(id)
    .then( (referral) => {
        res.status(200).json(referral)
    })
    .catch( () => {
        res.status(500).json({
            message: "Error : Unable to get referral"
        })
    })

})

// Index: create one referral
router.post('/create', function(req, res, next) {
    //to test post request with sample data
    // console.log( sampleReferral )

    Referral.create( req.body )
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
