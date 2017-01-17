import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import Formsy from 'formsy-react'
import { FormsyDate,
         FormsySelect,
         FormsyText,
         FormsyTime,
         FormsyToggle } from 'formsy-material-ui/lib'

import { RaisedButton,
         MenuItem     } from 'material-ui'

  const style = {
      referralOptions :{
          display: 'flex',
        //   justifyContent: 'space-between',
          alignItems: 'center',
      },
      uploadButton :{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      },
      card :{
          marginBottom : 15
      },
      cardActions :{
          textAlign: 'right'
      },
      paperStyle: {
      //   width: 300,
        margin: 'auto',
        padding: 20,
      },
      switchStyle: {
        marginBottom: 16,
      },
      submitStyle: {
        marginTop: 32,
      },
      chip: {
          margin: 4,
      },
      wrapper: {
          display: 'flex',
          flexWrap: 'wrap',
        }
  }

class AddReferral extends Component {
    constructor(){
        super()
        this._createReferral = this._createReferral.bind(this)

    }

    _createReferral(data) {
        // event.preventDefault()
        const referral = 
            {
                referralStatus:             data.referralStatus,
                patientSurname:             data.patientSurname,
                patientgivenName:           data.patientgivenName,
                patientGender:              data.patientGender,
                patientDateOfBirth:         data.patientDateOfBirth,
                patientAddress:             data.patientAddress,
                patientPostcode:            data.patientPostcode,
                patientMedicare:            data.patientMedicare,
                patientContactNumber:       data.patientContactNumber,
                doctorSurname:              data.doctorSurname,
                doctorGivenName:            data.doctorGivenName,
                doctorClinic:               data.doctorClinic,
                doctorAddress:              data.doctorAddress,
                doctorPostcode:             data.doctorPostcode,
                doctorContactNumber:        data.doctorContactNumber,
                referralRequestedService:   data.referralRequestedService,
                referralReasonForReferral:  data.referralReasonForReferral,
                referralUrgent:             data.referralUrgent,
                referralRuralCode:          data.referralRuralCode, 
            }
        
        console.log(JSON.stringify(referral,null,2))
        // console.log('adding a referral')
        // console.log(referral)
        this.props._addReferral(referral)

    }

    render(){
        return(
            <div style={style}>

                <Formsy.Form
                    ref={ (input) => this.referralForm = input }
                    onValidSubmit={ (data) => this._createReferral(data) }
                >

                    <div style={style.referralOptions}>
                        <RaisedButton 
                            label="Edit details" 
                            primary={true} 
                            style={style.uploadButton} 
                        />

                        <RaisedButton
                            type="submit"
                            label={this.props.action}
                        />

                    </div>
                

                    <h1>Referral status</h1>
                    <FormsySelect
                        name="referralStatus"
                        floatingLabelText="Status"
                    >
                        <MenuItem value={'accepted'} primaryText="Accepted" />
                        <MenuItem value={'assigned'} primaryText="Assigned" />
                        <MenuItem value={'declined'} primaryText="Declined" />
                        <MenuItem value={'withdrawn'} primaryText="Withdrawn" />
                        <MenuItem value={'rejected'} primaryText="Rejected" />
                        <MenuItem value={'completed'} primaryText="Completed" />
                        <MenuItem value={'noShow'} primaryText="No show" />
                    </FormsySelect>

                    {/* patient data form below */}
                    <h1>Patient Data</h1>
                    <FormsyText
                        name="patientSurname"
                        hintText="Surname"
                        floatingLabelText="Surname"
                    />

                    <FormsyText
                        name="patientgivenName"
                        hintText="Given name"
                        floatingLabelText="Given name"
                    />

                    <FormsySelect
                            name="patientGender"
                            floatingLabelText="Gender"
                    >
                            <MenuItem value={'M'} primaryText="Male" />
                            <MenuItem value={'F'} primaryText="Female" />
                    </FormsySelect>



                    <FormsyText
                        name="patientAddress"
                        hintText="Address"
                        floatingLabelText="Address"
                    />

                    <FormsyText
                        name="patientPostcode"
                        hintText="Postcode"
                        floatingLabelText="Postcode"
                    />

                    <FormsyDate
                        name="patientDateOfBirth"
                        floatingLabelText="Date of birth"
                    />

                    <FormsyText
                        name="patientMedicare"
                        hintText="Medicare number"
                        floatingLabelText="Medicare number"
                    />

                    <FormsyText
                        name="patientContactNumber"
                        hintText="Contact number"
                        floatingLabelText="Contact number"
                    />

                    {/* doctor data form below */}
                    <h1>Doctor Data</h1>
                    <FormsyText
                        name="doctorSurname"
                        hintText="Surname"
                        floatingLabelText="Surname"
                    />

                    <FormsyText
                        name="doctorGivenName"
                        hintText="Given name"
                        floatingLabelText="Give name"
                    />

                    <FormsyText
                        name="doctorClinic"
                        hintText="Clinic"
                        floatingLabelText="Clinic"
                    />

                    <FormsyText
                        name="doctorAddress"
                        hintText="Address"
                        floatingLabelText="Address"
                    />

                    <FormsyText
                        name="doctorPostcode"
                        hintText="Postcode"
                        floatingLabelText="Postcode"
                    />

                    <FormsyText
                        name="doctorContactNumber"
                        hintText="Contact number"
                        floatingLabelText="Contact number"
                    />

                
                    {/* referral form below */}
                    <h1>Referral Details</h1>
                    <FormsyText
                        name="referralReasonForReferral"
                        hintText="Reason for referral"
                        floatingLabelText="Reason for referral"
                    />

                    <FormsySelect
                        name="referralRequestedService"
                        floatingLabelText="Requested service"
                    >
                        <MenuItem value={'mentalHealthAssessment'} primaryText="Mental Health Assessment" />
                        <MenuItem value={'medicationReview'} primaryText="Medication Review" />
                        <MenuItem value={'dianogsticClarification'} primaryText="Diagnostic Clarifiction" />
                        <MenuItem value={'assessmentForManagementOfBPSD'} primaryText="Assessment for Management of BPSD" />
                    </FormsySelect>

                    <FormsyToggle
                        name="referralUrgent"
                        label="Urgent"
                        style={style.switchStyle}
                    />
                    <div style={style.uploadButton}>
                        <RaisedButton 
                            label="Upload" 
                            primary={true} 
                            style={style.uploadButton} 
                        />
                        <p>Upload additional information (Limited to one PDF file)</p>
                    </div>

                    {/* triage below */}
                    <h1>Triage</h1>
                    <FormsySelect
                        name="referralRuralCode"
                        floatingLabelText="Rural code"
                    >
                        <MenuItem value={'RA1MajorCities'} primaryText="RA1 MajorCities" />
                        <MenuItem value={'RA2InnerRegional'} primaryText="RA2 Inner Regional" />
                        <MenuItem value={'RA3OuterRegional'} primaryText="RA3 Outer Regional" />
                        <MenuItem value={'RA4Remote'} primaryText="RA4 Remote" />
                        <MenuItem value={'RA5VeryRemote'} primaryText="RA5 Very Remote" />
                    </FormsySelect>

                    <FormsyDate
                        name="referralAppointmentDate"
                        floatingLabelText="Appointment date"
                    />
                    <FormsyTime
                        name="referralAppointmentTime"
                        floatingLabelText="Appointment time"
                    />

                    <p>Last Date reviewed (placeholder)</p>
                        
                    </Formsy.Form>



                
            </div>
        )
    }
}

export default AddReferral

