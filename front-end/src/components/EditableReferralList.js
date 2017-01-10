import React, { Component } from 'react'

//Components
import EditableReferral from './EditableReferral'

const style = {
    margin: '20px',
    backgroundColor: 'gray'
}

class EditableReferralList extends Component {
    render(){
        return(
            <div className="border" style={style}> 
                <h1>This is a EditableReferralList component</h1>

                {/* this should be a list of referrals later on */}
                <EditableReferral />
                <EditableReferral />
                <EditableReferral />
            </div>
        )
    }
}

export default EditableReferralList

