import React, { Component } from 'react'
import Formsy from 'formsy-react'
import {  FormsySelect,
         FormsyText } from 'formsy-material-ui/lib'
import { RaisedButton,
        MenuItem } from 'material-ui'


const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL"
  }

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
    },
  }

class SignUpForm extends Component {
  constructor(props) {
      super(props)
      this.onValid = this.onValid.bind(this)
      this.onInvalid = this.onInvalid.bind(this)
      this.submitForm = this.submitForm.bind(this)
      this.notifyFormError = this.notifyFormError.bind(this)

      this.state = {
          canSubmit: true
      }
  }

  onInvalid = () => {
    this.props.onChangeValid(false)
    // this.setState({canSubmit: false})
  }

  onValid = () => {
    this.props.onChangeValid(true)
    // this.setState({canSubmit: true})
  }

  submitForm = (data) => {
      alert(JSON.stringify(data,null,4))
  }

  notifyFormError = (data) => {
      console.error('Form error:', data)
  }



  render(){
      return(

        <Formsy.Form
            onValid={this.onValid}
            onInvalid={this.onInvalid}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
        >
        <div style={style.referralOptions}>

          <FormsyText
                      name="email"
                      required
                      hintText="Email"
                      floatingLabelText="Email"
          />
          <br />
          <FormsyText
                      name="password"
                      type="password"
                      required
                      hintText="Password"
                      floatingLabelText="Password"
          />
          <br />
        </div>
        <div style={style.referralOptions}>
        {/* patient data form below */}
        <FormsyText
            name="userSurname"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
            hintText="Surname"
            floatingLabelText="Surname"
            // defaultValue={this.props.referral.patientSurname}
        />
<br />
        <FormsyText
            name="usergivenName"
            validations="isWords"
            validationError={errorMessages.wordsError}
            required
            hintText="Given name"
            floatingLabelText="Given name"
            // value={this.props.referral.patientgivenName}
        />
      <br />
    </div>
    <div>
        <FormsyText
            name="providerNumber"
            hintText="Provider Number"
            floatingLabelText="Provider Number"
            // defaultValue={this.props.referral.patientMedicare}
        />
      <br />
        <FormsyText
            name="ContactNumber"
            validations="isInt"
            validationError={errorMessages.wordsError}
            hintText="Contact number"
            floatingLabelText="Contact number"
            // defaultValue={this.props.referral.patientContactNumber}
        />
        </div>
        <div>
        <FormsySelect
            name="Role"
            floatingLabelText="Role"
            // value={this.props.referral.referralStatus}
        >
            <MenuItem value={'psychiatrist'} primaryText="Psychiatrist" />
            <MenuItem value={'generalPractitioner'} primaryText="General Practitioner" />
        </FormsySelect>
      </div>
    <br/>
        <p>Already have an account? Log in <a onClick={this.props.onYesAccount} href="#">here</a></p>
        </Formsy.Form>

      )
  }
}


export default SignUpForm