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

                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />

                
                <CardText expandable={true}>
                    <Paper style={style.paperStyle}>
                        <Formsy.Form
                            onValid={this.enableButton}
                            onInvalid={this.disableButton}
                            onValidSubmit={this.submitForm}
                            onInvalidSubmit={this.notifyFormError}
                        >
                        FORM COMES HERE
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

