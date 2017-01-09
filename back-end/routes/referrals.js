const express = require('express');
const router = express.Router();
const Referral = require('../models/Referral')

/* GET users listing. */
router.get('/', function(req, res, next) {
    Referral.find()
    .then(referrals => {
        res.json(referrals)
    })
});

module.exports = router;