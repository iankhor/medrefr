import React from 'react';
import ModalDialog from '../App/ModalDialog';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import { RaisedButton } from 'material-ui'
import auth from './../../api/initAuth'


const style = {
  margin: 16,
}


export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 3,
      loginMode: true,
      isLoggedIn: auth.loggedIn()
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  noAccount = (event) => this.setState({loginMode: false});
  yesAccount = (event) => this.setState({loginMode: true});

  _renderSignOutButton = () => {
      return(
        <RaisedButton
            type="button"
            label="Signout"
            onClick={ auth.logout }
        />
      )
  }

  render() {
    console.log('isLoggedIn',this.state.isLoggedIn)

    const { loginMode } = this.state
    // const loginMode = this.state.loginMode

    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} style={style}>
          <ToolbarTitle text={this.props.title} />
        </ToolbarGroup>

        <ToolbarGroup>

          <ModalDialog
            label="Log In / Sign Up"
            title={loginMode ? "Log In" : "Sign Up"}
            onOpen={this.yesAccount}
            isLoggedIn={this.state.isLoggedIn}
          >
            {
              loginMode ?
              <LoginForm onNoAccount={this.noAccount} /> :
              <SignUpForm onYesAccount={this.yesAccount}  onChangeValid={() => {}} />
            }
          </ModalDialog>

          {this.state.isLoggedIn ? this._renderSignOutButton() : null}

        </ToolbarGroup>

      </Toolbar>
    );
  }
}