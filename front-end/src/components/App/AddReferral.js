import React, { Component } from 'react'
import ModalDialog from './ModalDialog'

const style = {
    marginRight: 20,
    textAlign: 'center'
}

class AddReferral extends Component {
    constructor(){
        super()
        this._createReferral = this._createReferral.bind(this)

    }

    _createReferral(e) {
        const referral = 
            {
                id:                         1,
                referralStatus:             "accepted",
                patientSurname:             "Brady",
                patientgivenName:           "Cardia",
                patientGender:              "M",
                patientDateOfBirth:         "1950/12/26",
                patientAddress:             "120, Spencer Street, Melbourne",
                patientPostcode:            "3000",
                patientMedicare:            "12345678901",
                patientContactNumber:       "0412345678",
                doctorSurname:              "Arrest",
                doctorGivenName:            "Cardiac",
                doctorClinic:               "Chest Pain Clinic",
                doctorAddress:              "123, Fake street, Melbourne",
                doctorPostcode:             "3000",
                doctorContactNumber:        "0412345679",
                referralRequestedService:   "medicationReview",
                referralReasonForReferral:  "He is crazy",
                referralUrgent:             false,
                referralRuralCode:          "RA3OuterRegional", 
                role:                       "admin",
                imgProfile:                   'https://openclipart.org/image/2400px/svg_to_png/225296/Red-Heart.png'
            }
        
        console.log('adding a referral')
        console.log(referral)
        this.props._addReferral(referral)

    }

    render(){
        return(
            <div style={style}>
                {/* <ModalDialog label="New Referral" children="hey. I'm a child" title="Enter Details" /> */}
                <button onClick={this._createReferral}>Add referral</button>
            </div>
        )
    }
}

export default AddReferral

