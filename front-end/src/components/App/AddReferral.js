import React, { Component } from 'react'
import ModalDialog from './ModalDialog'

const style = {
    marginRight: 20,
    textAlign: 'center'
}

class AddReferral extends Component {
    render(){
        return(
            <div style={style}>

                    <ModalDialog label="New Referral" children="hey. I'm a child" title="Enter Details" />


            </div>
        )
    }
}

export default AddReferral

