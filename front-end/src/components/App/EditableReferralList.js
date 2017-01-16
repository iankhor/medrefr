import React, { Component } from 'react'

//Components
import EditableReferral from './EditableReferral'

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
                        referrals.map( (jsonObject) => <EditableReferral referral={jsonObject} /> )
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

                    
