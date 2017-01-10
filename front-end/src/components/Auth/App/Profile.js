import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123,
    data4: 123
}

//material-ui components
import { TextField } from 'material-ui/';

class Profile extends Component {
    render(){
        return(
            <App> 
                <br/>
                <div className="border color-purple">
                    <p>THIS IS THE PROFILE PAGE</p>
                    <p><Link to='/'>Go to root page</Link></p>
                    <p>
                        <TextField
                            hintText="Type something here"
                            floatingLabelText="This is a text field child from Profile component"
                            fullWidth={true}
                        />
                    </p>
                </div> 
            </App> 
        )
    }
}

export default Profile

