import React, { Component } from 'react'
import { Card, 
         CardActions, 
         CardHeader, 
         CardMedia, 
         CardTitle, 
         CardText,
         Toggle,
         FlatButton } from 'material-ui'


const style = {
    marginBottom: '5px',
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
           <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={style}>
                <CardHeader
                    title={this.props.referral.name}
                    subtitle={this.props.referral.dateOfBirth}
                    avatar={this.props.referral.imgProfile}
                    actAsExpander={true}
                    showExpandableButton={true}
                >
                    {this.props.referral.gender}
                </CardHeader>

                <CardMedia
                expandable={true}
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="https://cdn.traileraddict.com/article/wp-content/uploads/2016/10/guardians-galaxy-wallpaper.jpg" />
                </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
            <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
            <FlatButton label="Expand" onTouchTap={this.handleExpand} />
            <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
            </CardActions>
      </Card>
        )
    }
}

export default EditableReferral

