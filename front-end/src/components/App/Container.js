import React, { Component } from 'react';
import './../../css/style.css'

//App components
import sampleReferrals from './_sample-referrals.js'
import Header from '../shared/Header'
import DebugTempLink from '../../utils/DebugTempLink'

//theme related material-ui
import { MuiThemeProvider } from 'material-ui/styles'

import medrefrTheme from './../styles/Theme'         

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={medrefrTheme}>
        <div>
            {/* temp onscreen redirection */}
            <DebugTempLink />
            <Header />
            {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
