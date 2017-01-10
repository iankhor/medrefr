import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router'
import JSONDebugger from '../utils/JSONDebugger'

// referral components
import EditableReferralList from './EditableReferralList'

const style = {
    margin: '20px',
    backgroundColor: 'blue'
}

class ReferralDashboard extends Component {
    render(){
        return(
            <App> 
                <br/>
                <div className="border color-purple"  style={style}>
                    <h1>THIS IS THE REFERRAL DASHBOARD Component</h1>
                    <h4>This DISPLAYS the various parts of the dashboard</h4>
                    <EditableReferralList />
                </div> 
            </App> 
        )
    }
}

export default ReferralDashboard

