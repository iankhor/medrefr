import React, { Component } from 'react'

//Components
import ReferralCard from './ReferralCard'

const style = {
    margin: '10px',
}

class EditableReferralList extends Component {

    render(){
        // console.log('referrals', !this.props.referrals)
        const referrals = this.props.referrals
        return(
            <div style={style}>
                {(!!referrals) ? 
                    (
                        referrals.map( (jsonObject) => <ReferralCard referral={jsonObject} /> )
                    ) 
                    : 
                    ( 
                        <p> No referrals now </p>
                    )
                }
            </div>
        )
    }
}

export default EditableReferralList

                    
