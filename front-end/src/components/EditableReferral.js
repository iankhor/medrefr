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
            </div>
        )
    }
}

export default EditableReferral

