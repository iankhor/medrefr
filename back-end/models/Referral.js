const mongoose = require('mongoose')

const referralSchema = new mongoose.Schema({
            referralStatus:             { type: String, default: "Pending" },             
            patientSurname:             String,               
            patientgivenName:           String,            
            patientGender:              String,               
            patientBirthDay:            Number,              
            patientBirthMonth:          Number,           
            patientBirthYear:           Number,            
            patientAddress:             String,              
            patientPostcode:            Number,             
            patientMedicare:            Number,     
            patientContactNumber:       Number,        
            doctorSurname:              String,               
            doctorGivenName:            String,             
            doctorClinic:               String,                
            doctorAddress:              String,
            doctorPostcode:             Number,              
            doctorContactNumber:        Number,         
            referralAppointmentDay:     Number,      
            referralAppointmentMonth:   Number, 
            referralAppointmentYear:    Number,     
            referralRequestedService:   Number,    
            referralReasonForReferral:  String,   
            referralUrgent:             { type: Boolean, default: false }, 
            referralRuralCode:          String,  
            referralAppointmentHour:    Number, 
            referralAppointmentMinute:  Number, 
            referralAppointmentPeriod:  Number, 
            role:                       String,
            createdAt:                  { type: Date, default: Date.now} 

})

const Referral = mongoose.model('Referral', referralSchema)

module.exports = Referral