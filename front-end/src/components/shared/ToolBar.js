import React , { Component, PropTypes }from 'react';
import ModalDialog from '../App/ModalDialog';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import auth from './../../api/initAuth'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { RaisedButton,
        //  IconButton,
        //  IconMenu,
        //  MenuItem,
        } from 'material-ui'
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const style = {
  margin: 16,
}

export default class MainToolbar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 3,
      loginMode: true,
      isLoggedIn: auth.loggedIn()
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  noAccount = (event) => this.setState({loginMode: false});
  yesAccount = (event) => this.setState({loginMode: true});

  _setIsLoggedIn = (state) => { 
    this.setState( { isLoggedIn: state } ) 
    console.log('Toolbar isLoggedin : ', this.state.isLoggedIn)
  }

  _handleSignOut = () => {
    auth.logout() 
    this.setState( { isLoggedIn: false } ) 
    this.context.router.transitionTo('/')
  }

  _renderSignOutButton = () => {
      return(
        <div>
          <RaisedButton label="Referral Dashboard" secondary={true} onTouchTap={ () => {this.context.router.transitionTo('/ReferralDashboard')} } />
          <RaisedButton label="Sign Out" default={true} onTouchTap={ this._handleSignOut }  />
        </div>
      )
  }

  _renderLoginSignInModal = () => {
      return(
        <ModalDialog
            label="Log In / Sign Up"
            title={this.state.loginMode ? "Log In" : "Sign Up"}
            onOpen={this.yesAccount}
            isLoggedIn={this.state.isLoggedIn}
        >
            {
              this.state.loginMode ?
              <LoginForm onNoAccount={this.noAccount} _setIsLoggedIn={this._setIsLoggedIn} /> :
              <SignUpForm onYesAccount={this.yesAccount}  onChangeValid={() => {}} />
            }
          </ModalDialog>
      )
  }

  render() {
    console.log('isLoggedIn',this.state.isLoggedIn)

    // const { loginMode } = this.state
    // const loginMode = this.state.loginMode

    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} style={style}>
          <ToolbarTitle text={this.props.title} />
        </ToolbarGroup>

        <ToolbarGroup>
          {this.state.isLoggedIn ? this._renderSignOutButton() : this._renderLoginSignInModal()}
        </ToolbarGroup>

      </Toolbar>
    );
  }

}

MainToolbar.contextTypes = {
    router: PropTypes.object
}