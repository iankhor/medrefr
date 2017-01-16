import React, { Component } from 'react'

// referral components
import EditableReferralList from './EditableReferralList'
import AddReferral from './AddReferral'

const style = {
    margin: '20px',
}

class ReferralDashboard extends Component {
    render(){
        return(
                <div style={style}>
                    <AddReferral />
                    <EditableReferralList 
                        _loadSampleReferral={this.props._loadSampleReferral}
                        referrals={this.props.referrals}
                    />
                </div> 
        )
    }
}

export default ReferralDashboard

