var express = require('express');
var router = express.Router();
const Referral = require('../models/Referral')

/* GET users listing. */
router.get('/', function(req, res, next) {
    Referral.find()
    .then(referrals => {
        res.json(referrals)
    })
});

router.post('/', function(req,res,next){
  Referral.create({
    patient_first_name: 'John',
    patient_last_name: 'Smith',
    patient_referral_medical_condition: 'Random',
    doctor_first_name: 'Doctor',
    doctor_last_name: 'Strange',
    doctor_address: 'Some address',
    doctor_provider_number : '1234123',
    doctor_signature: 'Some link',
  })
  .then(referral => {
    res.json(referral)
  })

})

module.exports = router;
