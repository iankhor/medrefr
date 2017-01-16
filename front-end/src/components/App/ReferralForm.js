import React, { Component } from 'react'
import Container from './Container'
import Formsy from 'formsy-react'
import { FormsyDate,
         FormsySelect,
         FormsyText,
         FormsyTime,
         FormsyToggle } from 'formsy-material-ui/lib'

import { RaisedButton,
         MenuItem     } from 'material-ui'


const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL"
  }

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



class ReferralForm extends Component {
  constructor(props) {
      super(props)
      this.enableButton = this.enableButton.bind(this)
      this.disableButton = this.disableButton.bind(this)
      this.submitForm = this.submitForm.bind(this)
      this.notifyFormError = this.notifyFormError.bind(this)
      this.enableButton = this.enableButton.bind(this)

      this.state = {
          canSubmit: false,
          submitStatus: 0,
          isFormDisabled: true,
          formDisabledStatus : 1,
          isEditButttonDisabled : false,
          editButttonStatus : 0

      }
  }

  disableButton = () => {
      this.setState({canSubmit: false})
  }

  enableButton = () => {
      this.setState({canSubmit: true})
  }

  enableEdit = () => {
      this.setState( { isFormDisabled: this.state.formDisabledStatus ? false : true  })
      this.setState( { formDisabledStatus: this.state.isFormDisabled ? 0 : 1  })
      this.setState( { isEditButttonDisabled: this.state.editButttonStatus ? false : true  })
      this.setState( { editButttonStatus: this.state.isEditButttonDisabled ? 0 : 1  })
  }

  submitForm = (data) => {
      this.setState( { isFormDisabled: this.state.formDisabledStatus ? false : true  })
      this.setState( { formDisabledStatus: this.state.isFormDisabled ? 0 : 1  })
      this.setState( { isEditButttonDisabled: this.state.editButttonStatus ? false : true  })
      this.setState( { editButttonStatus: this.state.isEditButttonDisabled ? 0 : 1  })
      this.setState( { canSubmit: false } )

      console.log(JSON.stringify(data,null,2))
  }

  notifyFormError = (data) => {
      console.error('Form error:', data)
  }

  render(){
      return(
          <Container>
            <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError}
            >

                <div style={style.referralOptions}>
                    <RaisedButton 
                        label="Edit details" 
                        primary={true} 
                        style={style.uploadButton} 
                        onClick={this.enableEdit}
                        disabled={this.state.isEditButttonDisabled}
                    />

                     <RaisedButton
                        type="submit"
                        label="Submit"
                        disabled={!this.state.canSubmit}
                    />
                </div>
                <h1>Referral status</h1>
                    <FormsySelect
                        name="referralStatus"
                        floatingLabelText="Status"
                        disabled={this.state.isFormDisabled}
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
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    required
                    hintText="Surname"
                    floatingLabelText="Surname"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="patientgivenName"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    required
                    hintText="Given name"
                    floatingLabelText="Given name"
                    disabled={this.state.isFormDisabled}
                />

                <FormsySelect
                        name="patientGender"
                        floatingLabelText="Gender"
                        disabled={this.state.isFormDisabled}
                >
                        <MenuItem value={'M'} primaryText="Male" />
                        <MenuItem value={'F'} primaryText="Female" />
                </FormsySelect>



                <FormsyText
                    name="patientAddress"
                    validations="matchRegexp"
                    validationError={errorMessages.wordsError}
                    hintText="Address"
                    floatingLabelText="Address"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="patientPostcode"
                    validations="isInt"
                    validationError={errorMessages.wordsError}
                    hintText="Postcode"
                    floatingLabelText="Postcode"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyDate
                    name="patientDateOfBirth"
                    floatingLabelText="Date of birth"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="patientMedicare"
                    validations="isAlphanumeric"
                    validationError={errorMessages.wordsError}
                    hintText="Medicare number"
                    floatingLabelText="Medicare number"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="patientContactNumber"
                    validations="isInt"
                    validationError={errorMessages.wordsError}
                    hintText="Contact number"
                    floatingLabelText="Contact number"
                    disabled={this.state.isFormDisabled}
                />

                {/* doctor data form below */}
                <h1>Doctor Data</h1>
                <FormsyText
                    name="doctorSurname"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    required
                    hintText="Surname"
                    floatingLabelText="Surname"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="doctorGivenName"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    required
                    hintText="Given name"
                    floatingLabelText="Give name"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="doctorClinic"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    hintText="Clinic"
                    floatingLabelText="Clinic"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="doctorAddress"
                    validations="isAlphanumeric"
                    validationError={errorMessages.wordsError}
                    hintText="Address"
                    floatingLabelText="Address"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="doctorPostcode"
                    validations="isInt"
                    validationError={errorMessages.wordsError}
                    hintText="Postcode"
                    floatingLabelText="Postcode"
                    disabled={this.state.isFormDisabled}
                />

                <FormsyText
                    name="doctorContactNumber"
                    validations="isInt"
                    validationError={errorMessages.wordsError}
                    hintText="Contact number"
                    floatingLabelText="Contact number"
                    disabled={this.state.isFormDisabled}
                />

               
                {/* referral form below */}
                <h1>Referral Details</h1>
                <FormsyText
                    name="referralReasonForReferral"
                    validations="isWords"
                    validationError={errorMessages.wordsError}
                    hintText="Reason for referral"
                    floatingLabelText="Reason for referral"
                    disabled={this.state.isFormDisabled}
                />

                <FormsySelect
                    name="referralRequestedService"
                    floatingLabelText="Requested service"
                    disabled={this.state.isFormDisabled}
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
                    disabled={this.state.isFormDisabled}
                />
                <div style={style.uploadButton}>
                    <RaisedButton 
                        label="Upload" 
                        primary={true} 
                        style={style.uploadButton} 
                        disabled={this.state.isFormDisabled}
                    />
                    <p>Upload additional information (Limited to one PDF file)</p>
                </div>

                {/* triage below */}
                <h1>Triage</h1>
                <FormsySelect
                    name="referralRuralCode"
                    floatingLabelText="Rural code"
                    disabled={this.state.isFormDisabled}
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
                    disabled={this.state.isFormDisabled}
                />
                <FormsyTime
                    name="referralAppointmentTime"
                    floatingLabelText="Appointment time"
                    disabled={this.state.isFormDisabled}
                />

                <p>Last Date reviewed (placeholder)</p>
                    
          </Formsy.Form>

        </Container>
      )
  }
}


export default ReferralForm