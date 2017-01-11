import React, { Component } from 'react'
import { Link } from 'react-router'

class DebugTempLink extends Component {
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
                </div>
            </div>
        )
    }
}

export default DebugTempLink

