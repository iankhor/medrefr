import React, { Component } from 'react'

//import onscreen debugger
import JSONDebugger from '../utils/JSONDebugger'

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

                <button name="loadData" onClick={(e) => this.props._loadSampleReferral(e)}>Load sample data !</button>
                {console.log('referrals length = ', this.props.referrals.length)}

                {this.props.referrals.map( (jsonObject) => 
                     <JSONDebugger json={JSON.stringify(jsonObject)} />            
                )}
            

                {/* this should be a list of referrals later on */}
                {/*<EditableReferral />
                <EditableReferral />
                <EditableReferral />
                */}
            </div>
        )
    }
}

export default EditableReferralList

