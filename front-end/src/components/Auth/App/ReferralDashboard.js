import React, { Component } from 'react'

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

