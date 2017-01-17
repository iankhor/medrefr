import React, { Component } from 'react'
import ReferralForm from './ReferralForm'

import { Card, 
         CardHeader, 
         CardText,
         Paper } from 'material-ui'
      

const style = {
    referralOptions :{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    uploadButton :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card :{
        marginBottom : 15
    },
    cardActions :{
        textAlign: 'right'
    },
    paperStyle: {
    //   width: 300,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
  },
}

class ReferralCard extends Component {

    constructor(props) {
        super(props)
        this.enableButton = this.enableButton.bind(this)
        this.disableButton = this.disableButton.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.notifyFormError = this.notifyFormError.bind(this)
        this.handleExpandChange = this.handleExpandChange.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleExpand = this.handleExpand.bind(this)
        this.handleReduce = this.handleReduce.bind(this)
   
        this.state = {
            expanded: false,
            canSubmit: true
        }
    }

    disableButton = () => {
        this.setState({canSubmit: false})
    }

    enableButton = () => {
        this.setState({canSubmit: true})
    }

    submitForm = (data) => {
        alert(JSON.stringify(data,null,4))
    }

    notifyFormError = (data) => {
        console.error('Form error:', data)
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded})
    }

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle})
    }

    handleExpand = () => {
        this.setState({expanded: true})
    }

    handleReduce = () => {
        this.setState({expanded: false})
    }

    render(){
        return(
           <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={style.card}>
                <CardHeader
                    title={this.props.referral.patientSurname +
                            ' ,' +
                            this.props.referral.patientgivenName +
                            ' (' + this.props.referral.patientGender + ')'}
                    subtitle={this.props.referral.dateOfBirth}
                    avatar={this.props.referral.imgProfile}
                    actAsExpander={true}
                    showExpandableButton={true}
                >
                </CardHeader>

                <CardText expandable={true}>
                    <Paper style={style.paperStyle}>
                        <ReferralForm 
                            referral={this.props.referral} 
                            _updateReferral={this.props._updateReferral}
                            _addReferral={this.props._addReferral}
                            action={this.props.action}
                        />
                    </Paper>
                </CardText>

            </Card>
        )
    }
}

export default ReferralCard

