// export default Login

import React, { Component } from 'react'

import DebugTempLink from '../../utils/DebugTempLink'
import AuthService from './../../utils/AuthService'
import RaisedButton from 'material-ui/RaisedButton'

import {Redirect} from 'react-router'

                           

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
        // this.authenticate = this.logIn.bind(this)
        // this.isAuthenticate = this.isAuthenticate.bind(this)
        // this.logOut = this.logOut.bind(this)

        const auth = new AuthService('LdW1iARd0K080BlzpEI0vh6eitHuUceL',
                                    'iankhor.au.auth0.com')
        
        this.state = {
            isLoggedin: auth.loggedIn()
        }
    }

    logIn = () => {
        const auth = new AuthService('LdW1iARd0K080BlzpEI0vh6eitHuUceL',
                                    'iankhor.au.auth0.com')
        auth.login()
    }

    logOut = () => {
        const auth = new AuthService('LdW1iARd0K080BlzpEI0vh6eitHuUceL',
                                    'iankhor.au.auth0.com')
        auth.logout()
    }


    render(){
        return(
            <MuiThemeProvider muiTheme={medrefrTheme}>
            <div className="generic-center"> 
                {/* temp onscreen redirection */}
                <DebugTempLink authenticated={this.isAuthenticate}/>
                <h1>This is a Login page</h1>
                <RaisedButton label="Sign in" primary={true} style={style} onClick={this.logIn}/>
                <RaisedButton label="Logout" primary={true} style={style} onClick={this.logOut}/>
            </div>
            </MuiThemeProvider>

        )
    }
}

export default Login