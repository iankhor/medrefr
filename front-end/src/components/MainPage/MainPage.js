import React, { Component } from 'react'

//components
import Header from '../shared/Header'
import BodyList from './BodyList'
import Footer from '../shared/Footer'
import DebugTempLink from '../../utils/DebugTempLink'


//Material UI theme
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'
import medrefrTheme from '../styles/Theme'

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
            <MuiThemeProvider muiTheme={medrefrTheme}>
                <div className="Header">
                    <strong>STILL IN DEVELOPMENT</strong>

                    {/* temp onscreen redirection */}
                    <DebugTempLink />

                    <Header />
                    <BodyList />
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MainPage

