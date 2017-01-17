import React, { Component } from 'react'

// referral components
import EditableReferralList from './EditableReferralList'
import AddReferral from './AddReferral'
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
            <ReferralCard referral={referral}/>
        )
    }

    render(){
        return(
                <div style={style}>
                    {/*<AddReferral _addReferral={ this.props._addReferral } />*/}
                    {/*<EditableReferralList _loadSampleReferral={this.props._loadSampleReferral} referrals={this.props.referrals} /> */}
                    {Object.keys(this.props.referrals).map(this._renderReferrals)}
                </div> 
        )
    }
}

export default ReferralDashboard

