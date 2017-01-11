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
         MenuItem } from 'material-ui'

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
    }
}

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  }

class EditableReferral extends Component {

    constructor(props) {
        super(props)
   
        this.state = {
            expanded: false,
        }
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
                    title={this.props.referral.name}
                    subtitle={this.props.referral.dateOfBirth}
                    avatar={this.props.referral.imgProfile}
                    actAsExpander={true}
                    showExpandableButton={true}
                >
                    {/* rememebr to format gender */}
                    {this.props.referral.gender}
                </CardHeader>

                <CardText expandable={true}>
                    <Paper style={style.paperStyle}>
                        <Formsy.Form
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            onValidSubmit={this.submitForm}
                            onInvalidSubmit={this.notifyFormError}
                        >
                        
                        {/* patient data form below */}
                        <CardTitle title="Patient data" subtitle="" />
                        <FormsyText
                            name="surname"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Surname"
                            floatingLabelText="Surname"
                        />

                        <FormsyText
                            name="givenName"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Given name"
                            floatingLabelText="Give name"
                        />

                        <FormsyText
                            name="address"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Address"
                            floatingLabelText="Address"
                        />

                        <FormsyText
                            name="postcode"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Postcode"
                            floatingLabelText="Postcode"
                        />

                        <FormsyDate
                            name="dateOfBirth"
                            required
                            floatingLabelText="Date of birth"
                        />

                        <FormsyText
                            name="medicare"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Medicare number"
                            floatingLabelText="Medicare number"
                        />

                        <FormsyText
                            name="contactNumber"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Contact number"
                            floatingLabelText="Contact number"
                        />

                        {/* doctor data form below */}
                        <CardTitle title="Doctor data" subtitle="" />
                        <FormsyText
                            name="surname"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Surname"
                            floatingLabelText="Surname"
                        />

                        <FormsyText
                            name="givenName"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Given name"
                            floatingLabelText="Give name"
                        />

                        <FormsyText
                            name="clinic"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Clinic"
                            floatingLabelText="Clinic"
                        />

                        <FormsyText
                            name="address"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Address"
                            floatingLabelText="Address"
                        />

                        <FormsyText
                            name="postcode"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Postcode"
                            floatingLabelText="Postcode"
                        />

                        <FormsyText
                            name="contactNumber"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Contact number"
                            floatingLabelText="Contact number"
                        />

                        {/* doctor data form below */}
                        <CardTitle title="Referral details" subtitle="" />
                        <FormsyText
                            name="reasonForReferral"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Reason for referral"
                            floatingLabelText="Reason for referral"
                        />

                        <FormsySelect
                            name="requestedService"
                            required
                            floatingLabelText="Requested service"
                            menuItems={this.selectFieldItems}
                        >
                            <MenuItem value={'mentalHealthAssessment'} primaryText="Mental Health Assessment" />
                            <MenuItem value={'medicationReview'} primaryText="Medication Review" />
                            <MenuItem value={'dianogsticClarification'} primaryText="Diagnostic Clarifiction" />
                            <MenuItem value={'assessmentForManagementOfBPSD'} primaryText="Assessment for Management of BPSD" />
                        </FormsySelect>

                        <FormsyToggle
                            name="urgent"
                            label="Urgent"
                            style={style.switchStyle}
                        />
                        <div style={style.uploadButton}>
                            <RaisedButton label="Upload" primary={true} style={style.uploadButton} />
                            <CardText>Upload additional information (Limited to one PDF file)</CardText>
                        </div>
                        
                        <CardTitle title="Triage" subtitle="" />
                        <FormsySelect
                            name="ruralCode"
                            required
                            floatingLabelText="Rural code"
                            menuItems={this.selectFieldItems}
                        >
                            <MenuItem value={'RA1MajorCities'} primaryText="RA1 MajorCities" />
                            <MenuItem value={'RA2InnerRegional'} primaryText="RA2 Inner Regional" />
                            <MenuItem value={'RA3OuterRegional'} primaryText="RA3 Outer Regional" />
                            <MenuItem value={'RA4Remote'} primaryText="RA4 Remote" />
                            <MenuItem value={'RA5VeryRemote'} primaryText="RA5 Very Remote" />
                        </FormsySelect>

                        <FormsyDate
                            name="appointmentDate"
                            required
                            floatingLabelText="Appointment date"
                        />
                        <FormsyTime
                            name="appointmentTime"
                            required
                            floatingLabelText="Appointment time"
                        />
                        
                        <CardText>Last Date reviewed (placeholder)</CardText>

                        </Formsy.Form>
                    </Paper>
                </CardText>

                <CardActions style={style.cardActions} expandable={true}>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
                </CardActions>
            </Card>
        )
    }
}

export default EditableReferral

