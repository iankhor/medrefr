import React, { Component } from 'react'
import Formsy from 'formsy-react'
import getStatusIcon from './StatusIcon'

import { TriageStatusList,
         GPStatusList,
         PsychiatristStatusList }  from './StatusList'

import { FormsySelect,
         FormsyText,
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

class ReferralForm extends Component {
    constructor(props){
        super(props)
        this._processReferral = this._processReferral.bind(this)
        this._renderStatusList = this._renderStatusList.bind(this)
        this._toggleIsEditable = this._toggleIsEditable.bind(this)
        this._renderEditCancelButton = this._renderEditCancelButton.bind(this)

        this.state = {
            isEditable: false
        }
    }

    _processReferral(data, action) {
        // event.preventDefault()
        const referral = 
            {
                referralStatus:             data.referralStatus,
                patientSurname:             data.patientSurname,
                patientgivenName:           data.patientgivenName,
                patientGender:              data.patientGender,
                patientBirthDay:            data.patientBirthDay,
                patientBirthMonth:          data.patientBirthMonth,
                patientBirthYear:           data.patientBirthYear,
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
                referralAppointmentDay:     data.referralAppointmentDay,
                referralAppointmentMonth:   data.referralAppointmentMonth,
                referralAppointmentYear:    data.patientBirthYear,
                referralAppointmentHour:    data.referralAppointmentHour,
                referralAppointmentMinute:    data.referralAppointmentMinute,
                referralAppointmentPeriod:    data.referralAppointmentPeriod,
            }
        
        // console.log(JSON.stringify(referral,null,2))
        // console.log('adding a referral')

        // this.props.action === 'update' ? 
        // this.props._updateReferral(this.props.index, referral) : 
        // ( this.props._addReferral(referral), this.props._toggleShowNewReferralForm() )

        if (this.props.action === 'update'){
            this.props._updateReferral(this.props.index, referral)
        } 
        else {
            this.props._addReferral(referral)
            this.props._toggleShowNewReferralForm()
        }

    }

    _toggleIsEditable() {
        this.setState({ isEditable: !this.state.isEditable })
        console.log('isEditable : ', this.state.isEditable)
    }

    _renderStatusList() {
        console.log('statusList role', this.props.role)
        switch (this.props.role) {
            case 'triage':
                console.log('this is triage')
                return <TriageStatusList />

            case 'gp':
                console.log('this is gp')
                return <GPStatusList />

            case 'psychiatrist':
                console.log('this is psychiatrist')
                return <PsychiatristStatusList />
            
            default:
                console.log('defaulting to triage')
                return <TriageStatusList />
        }
    }

    _renderEditCancelButton(){

        if (this.props.action === 'new'){
            return(
                <RaisedButton 
                    label="Cancel" 
                    primary={true} 
                    style={style.uploadButton} 
                    onClick={this.props._toggleShowNewReferralForm}
                />
            )
        }
        else
        {

        }
    }

    render(){
        return(
            <div style={style}>

                <Formsy.Form
                    ref={ (input) => this.referralForm = input }
                    onValidSubmit={ (data) => this._processReferral(data, this.props.action) }
                >

                    <div style={style.referralOptions}>
                        {this._renderEditCancelButton()}
                        <RaisedButton 
                            label="Edit" 
                            primary={true} 
                            style={style.uploadButton} 
                            onClick={this._toggleIsEditable}
                        />

                        <RaisedButton
                            type="submit"
                            label={this.props.action === 'update' ? 'Update' : 'Submit'}
                        />

                    </div>
                

                    <h1>Referral status</h1>
                    {this._renderStatusList()}

                    {/* patient data form below */}
                    <h1>Patient Data</h1>
                    <FormsyText
                        name="patientSurname"
                        hintText="Surname"
                        floatingLabelText="Surname"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientSurname : null}
                        disabled={this.props.action==='update' ? this.state.isEditable : false}
                    />

                    <FormsyText
                        name="patientgivenName"
                        hintText="Given name"
                        floatingLabelText="Given name"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientgivenName : null}
                    />

                    <FormsySelect
                            name="patientGender"
                            floatingLabelText="Gender"
                            value={this.props.action === 'update' ? this.props.referral.patientGender : null}
                    >
                            <MenuItem value={'M'} primaryText="Male" />
                            <MenuItem value={'F'} primaryText="Female" />
                    </FormsySelect>



                    <FormsyText
                        name="patientAddress"
                        hintText="Address"
                        floatingLabelText="Address"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientAddress : null}
                    />

                    <FormsyText
                        name="patientPostcode"
                        hintText="Postcode"
                        floatingLabelText="Postcode"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientPostcode : null}
                    />

                    <FormsyText
                        name="patientBirthDay"
                        hintText="DOB Day"
                        floatingLabelText="DOB Day"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientBirthDay : null}
                    />

                    <FormsyText
                        name="patientBirthMonth"
                        hintText="DOB Month"
                        floatingLabelText="DOB Month"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientBirthMonth : null}
                    />

                    <FormsyText
                        name="patientBirthYear"
                        hintText="DOB Year"
                        floatingLabelText="DOB Year"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientBirthYear : null}
                    />

                    <FormsyText
                        name="patientMedicare"
                        hintText="Medicare number"
                        floatingLabelText="Medicare number"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientMedicare : null}
                    />

                    

                    <FormsyText
                        name="patientContactNumber"
                        hintText="Contact number"
                        floatingLabelText="Contact number"
                        defaultValue={this.props.action === 'update' ? this.props.referral.patientContactNumber : null}
                    />

                    {/* doctor data form below */}
                    <h1>Doctor Data</h1>
                    <FormsyText
                        name="doctorSurname"
                        hintText="Surname"
                        floatingLabelText="Surname"
                        defaultValue={this.props.action === 'update' ? this.props.referral.doctorSurname : null}
                    />

                    <FormsyText
                        name="doctorGivenName"
                        hintText="Given name"
                        floatingLabelText="Give name"
                        defaultValue={this.props.action === 'update' ? this.props.referral.doctorGivenName : null}
                    />

                    <FormsyText
                        name="doctorClinic"
                        hintText="Clinic"
                        floatingLabelText="Clinic"
                        defaultValue={this.props.action === 'update' ? this.props.referral.doctorClinic : null}
                    />

                    <FormsyText
                        name="doctorAddress"
                        hintText="Address"
                        floatingLabelText="Address"
                        defaultValue={this.props.action === 'update' ? this.props.referral.doctorAddress : null}
                    />

                    <FormsyText
                        name="doctorPostcode"
                        hintText="Postcode"
                        floatingLabelText="Postcode"
                        defaultValue={this.props.action === 'update' ? this.props.referral.doctorPostcode : null}
                    />

                    <FormsyText
                        name="doctorContactNumber"
                        hintText="Contact number"
                        floatingLabelText="Contact number"
                        defaultValue={this.props.action === 'update' ? this.props.referral.doctorContactNumber : null}
                    />

                
                    {/* referral form below */}
                    <h1>Referral Details</h1>
                    <FormsyText
                        name="referralReasonForReferral"
                        hintText="Reason for referral"
                        floatingLabelText="Reason for referral"
                        defaultValue={this.props.action === 'update' ? this.props.referral.referralReasonForReferral : null}
                    />

                    <FormsySelect
                        name="referralRequestedService"
                        floatingLabelText="Requested service"
                        value={this.props.action === 'update' ? this.props.referral.referralRequestedService : null}
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
                        value={this.props.action === 'update' ? this.props.referral.referralRuralCode : null}
                    >
                        <MenuItem value={'RA1MajorCities'} primaryText="RA1 MajorCities" />
                        <MenuItem value={'RA2InnerRegional'} primaryText="RA2 Inner Regional" />
                        <MenuItem value={'RA3OuterRegional'} primaryText="RA3 Outer Regional" />
                        <MenuItem value={'RA4Remote'} primaryText="RA4 Remote" />
                        <MenuItem value={'RA5VeryRemote'} primaryText="RA5 Very Remote" />
                    </FormsySelect>

                    <FormsyText
                        name="referralAppointmentDay"
                        hintText="Appointment Day"
                        floatingLabelText="Appointment Day"
                        defaultValue={this.props.action === 'update' ? this.props.referral.referralAppointmentDay : null}
                    />

                    <FormsyText
                        name="referralAppointmentMonth"
                        hintText="Appointment Month"
                        floatingLabelText="Appointment Month"
                        defaultValue={this.props.action === 'update' ? this.props.referral.referralAppointmentMonth : null}
                    />

                    <FormsyText
                        name="referralAppointmentYear"
                        hintText="Appointment Year"
                        floatingLabelText="Appointment Year"
                        defaultValue={this.props.action === 'update' ? this.props.referral.referralAppointmentYear : null}
                    />

                    <FormsyText
                        name="referralAppointmentHour"
                        hintText="Appointment Hour"
                        floatingLabelText="Appointment Month"
                        defaultValue={this.props.action === 'update' ? this.props.referral.referralAppointmentHour : null}
                    />

                    <FormsyText
                        name="referralAppointmentMinute"
                        hintText="Appointment Minute"
                        floatingLabelText="Appointment Year"
                        defaultValue={this.props.action === 'update' ? this.props.referral.referralAppointmentMinute : null}
                    />

                    <FormsySelect
                        name="referralAppointmentPeriod"
                        floatingLabelText="Period"
                        value={this.props.action === 'update' ? this.props.referral.referralAppointmentPeriod : null}
                    >
                        <MenuItem value={'AM'} primaryText="AM" />
                        <MenuItem value={'PM'} primaryText="PM" />
                    </FormsySelect>



                    <p>Last Date reviewed (placeholder)</p>
                        
                    </Formsy.Form>



                
            </div>
        )
    }
}

export default ReferralForm

