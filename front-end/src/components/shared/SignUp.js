import React, { Component } from 'react'
import ModalDialog from '../../utils/ModalDialog'
import SignUpForm from './SignUpForm'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false
    }

    this.onChangeValid = this.onChangeValid.bind(this)
  }

  onChangeValid(valid) {
    this.setState({ valid: valid })
  }

  render(){
    const { valid } = this.state
    return(
      <div>

        <ModalDialog label="Sign Up" title="Enter Details" valid={ valid }>
          <SignUpForm valid={ valid } onChangeValid={ this.onChangeValid } />
        </ModalDialog>

      </div>
    )
  }
}

export default SignUp
