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
                <h4>This DISPLAYS the list of referrals</h4>
                <h4>There should be an array of referrals, use map to display</h4>

                {/* code below is breaking, commented off for now*/}
               {/* {this.props.referrals.map( (jsonObject) => 
                    <EditableReferral referral={jsonObject} />
                )} */}
            </div>
        )
    }
}

export default EditableReferralList

