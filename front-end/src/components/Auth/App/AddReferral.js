import React, { Component } from 'react'
import { FloatingActionButton } from 'material-ui'

import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20,
    textAlign: 'center'
}

class AddReferral extends Component {
    render(){
        return(
            <div style={style}> 
                <FloatingActionButton style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

export default AddReferral

