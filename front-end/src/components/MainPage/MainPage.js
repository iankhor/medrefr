import React, { Component } from 'react'

//components
import Header from '../shared/Header'
import BodyList from './BodyList'
import Footer from '../shared/Footer'

//Material UI theme
import { MuiThemeProvider } from 'material-ui/styles'
import medrefrTheme from '../styles/Theme'

class MainPage extends Component {
    render(){
        return(
            <MuiThemeProvider muiTheme={medrefrTheme}>
                <div className="Header">
                    <Header />
                    <BodyList />
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default MainPage

