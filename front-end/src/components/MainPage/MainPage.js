import React, { Component } from 'react'
import { Link } from 'react-router'

//components
import Header from '../shared/Header'
import Footer from '../shared/Footer'

//Material UI theme
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
                <div className="Header">
                    <strong>STILL IN DEVELOPMENT</strong>
                    <Header />
                    <p>BODY</p>
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MainPage

