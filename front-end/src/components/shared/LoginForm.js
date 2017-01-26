import React, { Component, PropTypes , PropTypes as T  } from 'react'
import Formsy from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib'
import { RaisedButton } from 'material-ui'
import AuthService from './../../api/AuthService'

const auth = new AuthService(process.env.REACT_APP_AUTH_CLIENT_ID, process.env.REACT_APP_AUTH_DOMAIN_ADDRESS)

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

  static propTypes={
    onNoAccount: PropTypes.func.isRequired,
    // auth: T.instanceOf(AuthService)
  }

  constructor(props) {
      super(props)
      this.enableButton = this.enableButton.bind(this)
      this.disableButton = this.disableButton.bind(this)
      this.login = this.login.bind(this)
      this.notifyFormError = this.notifyFormError.bind(this)

      this.state = {
          canSubmit: true
      }
  }

  disableButton = () => { this.setState({canSubmit: false}) }
  enableButton = () => { this.setState({canSubmit: true}) }
  notifyFormError = (data) => { console.error('Form error:', data) }

  login = (data) => { 
    const { email, password } = data
    // console.log('auth',auth)
    auth.login(email, password)

  }


  render(){
    return(
      <div>
        <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.login}
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

         <RaisedButton
            style={style.submitStyle}
            type="submit"
            label="Submit"
            disabled={!this.state.canSubmit}
        />

        </Formsy.Form>
        <br />
        <p>Don't have an account? Sign up <a onClick={this.props.onNoAccount} href="#">here</a></p>
      </div>
  )};
}

export default LoginForm