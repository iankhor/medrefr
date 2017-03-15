const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
            surname:              String,
            givenName: String,
            dateOfBirthDay: Number,
            dateOfBirthMonth: Number,
            dateOfBirthYear: Number,
            providerNumber: String,
            contactNumber: Number,
            primaryPlaceOfPractice: String,
            role: String,
            subSpecialty: String,
            userID: ObjectID

})

const StaffProfile = mongoose.model('Profile', profileSchema)

module.exports = StaffProfile