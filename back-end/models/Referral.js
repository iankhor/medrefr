const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./_init')

const referralSchema = new Schema({
    isProxy:                        String,
    isScheduled:                    String,
    referredToStatus :              String,
    ruralCode:                      String,
    _referredBy:                    [{  type:     Schema.Types.ObjectId, 
                                        ref:    'ReferralHistory'     
                                    }],
    _referredTo:                    [{  type:     Schema.Types.ObjectId, 
                                        ref:    'ReferralHistory'     
                                    }],
    patientFirstName:               String,
    patientLastName:                String,
    patientAddress:                 String,
    patientPhone:                   Number,
    medicareNumber:                 Number,
    reasonForReferral:              String,
    reasonForReferralComments:      String,
    presentingComplains:            String,
    historyToPresentingComplains:   String,
    treatmentsToDate:               String,
    otherClinicalNotes:             String,
    timeframeOfAssessment:          String,
    category:                       String,
    appointmentDate:                String,
    appointmentTime:                String, 
    created_at:                     {   type: Date,
                                        default: Date.now 
                                    }
})

const referralHistorySchema = new Schema({
    created_at:                     {   type: Date,
                                        default: Date.now 
                                    }
})

const Referral = mongoose.model('Referral', referralSchema)
const ReferralHistory = mongoose.model('ReferralHistory', referralHistorySchema)

module.exports = Referral
module.exports = ReferralHistory
