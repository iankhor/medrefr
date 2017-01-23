import React from 'react';
import ModalDialog from '../App/ModalDialog';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      loginMode: true,
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  noAccount = (event) => this.setState({loginMode: false});
  yesAccount = (event) => this.setState({loginMode: true});

  render() {

    const style = {
      margin: 16,
    }

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
            onOpen={this.yesAccount}>
            {
              loginMode ?
              <LoginForm onNoAccount={this.noAccount} /> :
              <SignUpForm onYesAccount={this.yesAccount} onChangeValid={() => {}} />
            }
          </ModalDialog>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}