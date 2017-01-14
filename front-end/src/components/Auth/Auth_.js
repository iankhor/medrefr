import React, { Component } from 'react'

import DebugTempLink from '../../utils/DebugTempLink'

class Auth_ extends Component {
    render(){
        return(
            <div className="generic-center"> 
                {/* temp onscreen redirection */}
                <DebugTempLink />
                <h1>This is a Auth component</h1>
                <h2>... Enter email and password ...</h2>
            </div>
        )
    }
}

export default Auth_

