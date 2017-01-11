import React, { Component } from 'react'

const style = {
    margin: '20px',
    backgroundColor: 'green'
}

class AddReferral extends Component {
    render(){
        return(
            <div className="border" style={style}> 
                <h1>This is a AddReferral component</h1>
                <h4>This DISPLAYS an empty referral form or being masked by a + button</h4>
            </div>
        )
    }
}

export default AddReferral

