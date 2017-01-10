import React, { Component } from 'react'
import { Link } from 'react-router'
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'

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
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
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
                </div> 
            </MuiThemeProvider>
        )
    }
}

export default MainPage

