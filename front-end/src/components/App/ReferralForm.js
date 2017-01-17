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

      console.log('referral status',this.props.referral || null ) 

      return(
            <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError}
            >
            <p> muahaha</p>

                    
          </Formsy.Form>
      )
  }
}


export default ReferralForm