const sampleReferral = require('./_sample-referrals.js')

const express = require('express');
const Referral = require('../models/Referral');

const router = express.Router();

// Index: read all
router.get('/', function(req, res, next) {
    res.json({
        message: "get all"
    })
});

// Index: read all
router.post('/', function(req, res, next) {
    res.json(sampleReferral.referral1)

});

module.exports = router;
