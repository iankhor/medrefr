import React, { Component } from 'react';
import ModalDialog from '../../utils/ModalDialog';
import LoginForm from './LoginForm';

class LoginButton extends Component {
  render(){
    return(
      <div>

        <ModalDialog label="Login" title="Log In">
          <LoginForm />
        </ModalDialog>

      </div>
    )
  }
}

export default LoginButton
