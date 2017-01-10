import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router'
import JSONDebugger from '../utils/JSONDebugger'

// referral components
import EditableReferralList from './EditableReferralList'
import AddReferral from './AddReferral'

const style = {
    margin: '20px',
    backgroundColor: 'blue'
}

class ReferralDashboard extends Component {
    render(){
        return(
                <div className="border color-purple"  style={style}>
                    <h1>Thi is the REFERRAL DASHBOARD Component</h1>
                    <h4>This DISPLAYS the various parts of the dashboard</h4>
                    <h4>There should be an array of referrals, use map to display</h4>
                    
                    <EditableReferralList 
                        _loadSampleReferral={this.props._loadSampleReferral}
                        referrals={this.props.referrals}
                    />
                    <AddReferral />
                </div> 
        )
    }
}

export default ReferralDashboard

