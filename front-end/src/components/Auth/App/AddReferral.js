import React, { Component } from 'react'
import { FloatingActionButton } from 'material-ui'
import EditableReferral from './EditableReferral'

import ContentAdd from 'material-ui/svg-icons/content/add';
import ModalDialog from '../../../utils/ModalDialog'

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

