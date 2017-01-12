// export default Login

import React, { Component } from 'react'

import DebugTempLink from '../../utils/DebugTempLink'
import AuthService from './../../utils/AuthService'
import RaisedButton from 'material-ui/RaisedButton'

//Material UI theme
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'

import medrefrTheme from './../styles/Theme'

const style = {
  margin: 12,
}

class Login extends Component {
    constructor(){
        super()
        this.authenticate = this.authenticate.bind(this)
    }

  authenticate(){
    const auth = new AuthService('LdW1iARd0K080BlzpEI0vh6eitHuUceL',
                                 'iankhor.au.auth0.com')
    auth.login()
  }


    render(){
        return(
            <MuiThemeProvider muiTheme={medrefrTheme}>
            <div className="generic-center"> 
                {/* temp onscreen redirection */}
                <DebugTempLink />
                <h1>This is a Login page</h1>
                <RaisedButton label="Login" primary={true} style={style} onClick={this.authenticate}/>
            </div>
            </MuiThemeProvider>

        )
    }
}

export default Login