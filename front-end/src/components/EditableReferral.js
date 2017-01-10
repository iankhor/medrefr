import React, { Component } from 'react'

const style = {
    margin: '20px',
    backgroundColor: 'pink'
}

class EditableReferral extends Component {
    render(){
        return(
            <div className="border" style={style}> 
                <h1>This is a EditableReferral component</h1>
                <h4>This DISPLAYS or ALLOWS EDITING a specific referral</h4>
            </div>
        )
    }
}

export default EditableReferral

