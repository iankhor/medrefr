const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
            Surname:              String,
            // doctorGivenName:            String,
            // doctorClinic:               String,
            // doctorAddress:              String,
            // doctorPostcode:             Number,
            // doctorContactNumber:        Number,
            // role:                       String,
            createdAt:                  { type: Date, default: Date.now}

})

const StaffProfile = mongoose.model('Profile', profileSchema)

module.exports = StaffProfile