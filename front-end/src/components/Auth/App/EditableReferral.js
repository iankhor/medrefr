import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Card, 
         CardActions, 
         CardHeader, 
         CardMedia, 
         CardTitle, 
         CardText,
         Toggle,
         FlatButton,
         Paper,
         RaisedButton,
         MenuItem,
         Chip } from 'material-ui'

import { FormsyCheckbox, 
         FormsyDate, 
         FormsyRadio, 
         FormsyRadioGroup,
         FormsySelect, 
         FormsyText, 
         FormsyTime, 
         FormsyToggle, 
         FormsyAutoComplete } from 'formsy-material-ui/lib'
        

const style = {
    referralOptions :{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    uploadButton :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
  },
}

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  }

class EditableReferral extends Component {

    constructor(props) {
        super(props)
        this.enableButton = this.enableButton.bind(this)
        this.disableButton = this.disableButton.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.notifyFormError = this.notifyFormError.bind(this)
        this.handleExpandChange = this.handleExpandChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleExpand = this.handleExpand.bind(this)
        this.handleReduce = this.handleReduce.bind(this)
   
        this.state = {
            expanded: false,
            canSubmit: false
        }
    }

    disableButton = () => {
        this.setState({canSubmit: false})
    }

    enableButton = () => {
        this.setState({canSubmit: true})
    }

    submitForm = (data) => {
        alert(JSON.stringify(data,null,4))
    }

    notifyFormError = (data) => {
        console.error('Form error:', data)
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded})
    }

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle})
    }

    handleExpand = () => {
        this.setState({expanded: true})
    }

    handleReduce = () => {
        this.setState({expanded: false})
    }

    render(){
        return(
           <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={style.card}>
                <CardHeader
                    title={this.props.referral.name + ' (' + this.props.referral.gender + ')'}
                    subtitle={this.props.referral.dateOfBirth}
                    avatar={this.props.referral.imgProfile}
                    actAsExpander={true}
                    showExpandableButton={true}
                >
                </CardHeader>

                <CardText expandable={true}>
                    <Paper style={style.paperStyle}>
                        <Formsy.Form
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            onValidSubmit={this.submitForm}
                            onInvalidSubmit={this.notifyFormError}
                        >
                        <div style={style.referralOptions}>
                            <RaisedButton label="Edit details" primary={true} style={style.uploadButton} />
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
                        </div>
                        
                        {/* patient data form below */}
                        <CardTitle title="Patient data" subtitle="" />
                        <FormsyText
                            name="patientSurname"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Surname"
                            floatingLabelText="Surname"
                            defaultValue={this.props.referral.surname}
                        />

                        <FormsyText
                            name="patientgivenName"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Given name"
                            floatingLabelText="Give name"
                        />

                        <FormsyText
                            name="patientAddress"
                            validations="isAlphanumeric"
                            validationError={errorMessages.wordsError}
                            hintText="Address"
                            floatingLabelText="Address"
                        />

                        <FormsyText
                            name="patientPostcode"
                            validations="isInt"
                            validationError={errorMessages.wordsError}
                            hintText="Postcode"
                            floatingLabelText="Postcode"
                        />

                        <FormsyDate
                            name="patientDateOfBirth"
                            floatingLabelText="Date of birth"
                        />

                        <FormsyText
                            name="patientMedicare"
                            validations="isAlphanumeric"
                            validationError={errorMessages.wordsError}
                            hintText="Medicare number"
                            floatingLabelText="Medicare number"
                        />

                        <FormsyText
                            name="patientContactNumber"
                            validations="isInt"
                            validationError={errorMessages.wordsError}
                            hintText="Contact number"
                            floatingLabelText="Contact number"
                        />

                        {/* doctor data form below */}
                        <CardTitle title="Doctor data" subtitle="" />
                        <FormsyText
                            name="doctorSurname"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Surname"
                            floatingLabelText="Surname"
                        />

                        <FormsyText
                            name="doctorGivenName"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Given name"
                            floatingLabelText="Give name"
                        />

                        <FormsyText
                            name="doctorClinic"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            hintText="Clinic"
                            floatingLabelText="Clinic"
                        />

                        <FormsyText
                            name="doctorAddress"
                            validations="isAlphanumeric"
                            validationError={errorMessages.wordsError}
                            hintText="Address"
                            floatingLabelText="Address"
                        />

                        <FormsyText
                            name="doctorPostcode"
                            validations="isInt"
                            validationError={errorMessages.wordsError}
                            hintText="Postcode"
                            floatingLabelText="Postcode"
                        />

                        <FormsyText
                            name="doctorContactNumber"
                            validations="isInt"
                            validationError={errorMessages.wordsError}
                            hintText="Contact number"
                            floatingLabelText="Contact number"
                        />

                        {/* referral form below */}
                        <CardTitle title="Referral details" subtitle="" />
                        <FormsyText
                            name="referralReasonForReferral"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
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
                            <RaisedButton label="Upload" primary={true} style={style.uploadButton} />
                            <CardText>Upload additional information (Limited to one PDF file)</CardText>
                        </div>
                        
                         {/* triage below */}
                        <CardTitle title="Triage" subtitle="" />
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
                        
                        <CardText>Last Date reviewed (placeholder)</CardText>

                        <CardActions style={style.cardActions} expandable={true}>
                            <FlatButton
                                style={style.submitStyle}
                                type="submit"
                                label="Submit"
                                disabled={!this.state.canSubmit}
                            />

                            <FlatButton label="Collapse" onTouchTap={this.handleReduce} />
                    </CardActions>

                        </Formsy.Form>
                    </Paper>
                </CardText>

            </Card>
        )
    }
}

export default EditableReferral

