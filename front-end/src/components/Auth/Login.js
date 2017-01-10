import React, { Component } from 'react'

import DebugTempLink from '../../utils/DebugTempLink'

class Login extends Component {
    render(){
        return(
            <div className="generic-center"> 
                {/* temp onscreen redirection */}
                <DebugTempLink />
                <h1>This is a Login page</h1>
                <h2>... Enter email and password ...</h2>
            </div>
        )
    }
}

export default Login

