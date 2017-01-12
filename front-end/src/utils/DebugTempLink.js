import React, { Component } from 'react'
import { Link } from 'react-router'
import AuthService from './AuthService'

class DebugTempLink extends Component {
    constructor(){
        super()

        const auth = new AuthService('LdW1iARd0K080BlzpEI0vh6eitHuUceL',
                                    'iankhor.au.auth0.com')
        
        this.state = {
            isLoggedin: auth.loggedIn() || false
        }
    }


    render(){
        return(
            <div className="generic-center"> 
                <div>
                    <p>Temporary Debug Links</p>
                    <ul>   
                        <li><Link to="/">Root</Link></li>
                        <li><Link to="/Login">Login or Sign up</Link></li>
                        <li><Link to="/ReferralDashboardTemp">Referral Dashboard</Link></li>
                        <li><Link to="/NotFound">Not found</Link></li>
                    </ul>
                    <span>User is logged in ? <h1>{this.state.isLoggedin.toString()}</h1></span>      
                </div>
            </div>
        )
    }
}

export default DebugTempLink

