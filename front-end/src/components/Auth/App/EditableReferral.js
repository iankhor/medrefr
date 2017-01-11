import React, { Component } from 'react'
import Formsy from 'formsy-react'
import { Card, 
         CardActions, 
         CardHeader, 
         CardMedia, 
         CardTitle, 
         CardText,
         Toggle,
         FlatButton,
         Paper,
         RaisedButton,
         MenuItem } from 'material-ui'

import { FormsyCheckbox, 
         FormsyDate, 
         FormsyRadio, 
         FormsyRadioGroup,
         FormsySelect, 
         FormsyText, 
         FormsyTime, 
         FormsyToggle, 
         FormsyAutoComplete } from 'formsy-material-ui/lib'
        

const style = {
    card : {
        marginBottom: '5px',
    },
    cardActions :{
        textAlign: 'right'
    },
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    }
}

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  }

class EditableReferral extends Component {

    constructor(props) {
        super(props)
   
        this.state = {
            expanded: false,
        }
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
                    title={this.props.referral.name}
                    subtitle={this.props.referral.dateOfBirth}
                    avatar={this.props.referral.imgProfile}
                    actAsExpander={true}
                    showExpandableButton={true}
                >
                    {/* rememebr to format gender */}
                    {this.props.referral.gender}
                </CardHeader>

                <CardText expandable={true}>
                    <Paper style={style.paperStyle}>
                        <CardTitle title="Patient data" subtitle="" />
                        <Formsy.Form
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            onValidSubmit={this.submitForm}
                            onInvalidSubmit={this.notifyFormError}
                        >
                        
                        <FormsyText
                            name="surname"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Surname"
                            floatingLabelText="Surname"
                        />

                        <FormsyText
                            name="givenName"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Given name"
                            floatingLabelText="Give name"
                        />

                        <FormsyText
                            name="address"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Address"
                            floatingLabelText="Address"
                        />

                        <FormsyText
                            name="address"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Address"
                            floatingLabelText="Address"
                        />

                        <FormsyDate
                            name="dateOfBirth"
                            required
                            floatingLabelText="Date of birth"
                        />

                        <FormsyText
                            name="medicare"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Medicare number"
                            floatingLabelText="Medicare number"
                        />

                        <FormsyText
                            name="contactNumber"
                            validations="isWords"
                            validationError={errorMessages.wordsError}
                            required
                            hintText="Contact number"
                            floatingLabelText="Contact number"
                        />


                        </Formsy.Form>
                    </Paper>
                </CardText>

                <CardActions style={style.cardActions} expandable={true}>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
                </CardActions>
            </Card>
        )
    }
}

export default EditableReferral

