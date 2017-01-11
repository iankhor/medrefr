import React, { Component } from 'react'

//Components
import EditableReferral from './EditableReferral'

const style = {
    margin: '5px',
    backgroundColor: 'gray'
}

class EditableReferralList extends Component {

    render(){
        console.log(this.props.referrals)
        return(
            <div className="border" style={style}> 
                {this.props.referrals.map( (jsonObject) => 
                    <EditableReferral referral={jsonObject} />
                )}
            </div>
        )
    }
}

export default EditableReferralList

