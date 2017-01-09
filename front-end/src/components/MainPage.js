import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router'
import JSONDebugger from '../utils/JSONDebugger'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

//material-ui components
import { TextField } from 'material-ui/';

class MainPage extends Component {
    render(){
        return(
            <App> 
                <br/>
                <div className="border color-purple">
                    <p>THIS IS THE MAIN PAGE</p>
                    <p><Link to='/'>Go to root page</Link></p>
                    <p>
                        <TextField
                            hintText="Type something here"
                            floatingLabelText="This is a text field child from MainPage component"
                            fullWidth={true}
                        />
                    </p>
                    <p>Below is an example of the JSON debugger</p>
                    <JSONDebugger json={exampleJSONData} />
                
                </div> 
            </App> 
        )
    }
}

export default MainPage

