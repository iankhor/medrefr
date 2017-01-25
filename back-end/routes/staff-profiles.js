const express = require('express');
const StaffProfile = require('../models/StaffProfile');
const router = express.Router();

//Create
router.post('/', function(req, res, next) {
  StaffProfile.create( req.body )
  .then( profile => {
    res.json(profile)
  })
  .catch( () => {
    res.status(500).json({
      message: "Error: Unable to create new profile"
    })
  })
})

router.get('/', function(req, res, next) {
    StaffProfile.find()
    .then( profiles => {
        // res.json(referrals)
      res.json({ profiles })
    })
    .catch( () => {
        res.status(500).json({
            message: "Error : Unable to get all profiles"
        })
    })
})

module.exports = router;