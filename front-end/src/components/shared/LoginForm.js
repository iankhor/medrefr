import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib'

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

class LoginForm extends Component {
  constructor(props) {
      super(props)
      this.enableButton = this.enableButton.bind(this)
      this.disableButton = this.disableButton.bind(this)
      this.submitForm = this.submitForm.bind(this)
      this.notifyFormError = this.notifyFormError.bind(this)

      this.state = {
          canSubmit: true
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


  render(){
    return(
        <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
            style={style}
        >

        {/* Log In */}
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

        {/* <RaisedButton
            style={style.submitStyle}
            type="submit"
            label="Submit"
            disabled={!this.state.canSubmit}
        /> */}

        </Formsy.Form>

  )};
}

export default LoginForm