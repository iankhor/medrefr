import React, { Component } from 'react';
import '../../../css/style.css'

//App components
import sampleReferrals from './_sample-referrals.js'
import Header from '../../shared/Header'
import DebugTempLink from '../../../utils/DebugTempLink'
import PageTab from './PageTab'

//theme related material-ui
import { MuiThemeProvider } from 'material-ui/styles'

import medrefrTheme from '../../styles/Theme'         

class App extends Component {
  constructor() {
    super()

    this._loadSampleReferral = this._loadSampleReferral.bind(this)
    this._handleTabChange = this._handleTabChange.bind(this)

    this.state = {
      referrals: sampleReferrals,
      value: 'a'
    }

  }

  _loadSampleReferral(e) {
    console.log(e.target)
  }

  _handleTabChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={medrefrTheme}>
        <div className="App">
            {/* temp onscreen redirection */}
            <DebugTempLink />
            <Header />
            <PageTab />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
