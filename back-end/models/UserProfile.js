const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./_init')

const userProfileSchema = new Schema({
    // _user:                  [{ type: Schema.Types.ObjectId,
    //                            ref : ''
    //                         }],
    firstName:              String,
    lastName:               String,
    dateOfBirth :           Date,
    providerNumber:         String,
    contactNumber:          Number,
    primaryPlaceOfPractice: String,
    role:                   String,
    source:                 String,
    subSpecialty:           String,
    created_at:             {   type: Date,
                                default: Date.now 
                            }
})

const UserProfile = mongoose.model('UserProfile', userProfileSchema)

module.exports = UserProfile
