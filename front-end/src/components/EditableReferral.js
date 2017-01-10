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
                <p>id : {this.props.referral._id}</p>
                <p>name : {this.props.referral.name}</p>
                <p>provider ID : {this.props.referral.providerNumber}</p>
            </div>
        )
    }
}

export default EditableReferral

