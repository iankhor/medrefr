import React, { Component } from 'react'

// referral components
import ReferralCard from './ReferralCard'

const style = {
    margin: '20px',
}

class ReferralDashboard extends Component {
    constructor(){
        super()
        this._renderReferrals = this._renderReferrals.bind(this)
    }

    _renderReferrals(key){
        const referral = this.props.referrals[key]
        return(
            <ReferralCard 
                key={key} 
                referral={referral}
                _updateReferral={this.props._updateReferral}
                _addReferral={this.props._addReferral}
                action="update"
            />
        )
    }

    render(){
        return(
                <div style={style}>
                    <ReferralCard 
                        _updateReferral={this.props._updateReferral}
                        _addReferral={this.props._addReferral}
                        action="new"
                    />

                    {Object.keys(this.props.referrals).map(this._renderReferrals)}
                </div> 
        )
    }
}

export default ReferralDashboard

