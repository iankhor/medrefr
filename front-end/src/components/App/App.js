import React, { Component } from 'react';
import './../../css/style.css'

//App components
import sampleReferrals from './_sample-referrals.js'
import Header from '../shared/Header'
import DebugTempLink from '../../utils/DebugTempLink'
import PageTab from './PageTab'

//theme related material-ui
import { MuiThemeProvider } from 'material-ui/styles'

import medrefrTheme from './../styles/Theme'         

class App extends Component {
  constructor() {
    super()

    this._loadSampleReferral = this._loadSampleReferral.bind(this)
    this._handleTabChange = this._handleTabChange.bind(this)

    this.state = {
      referrals: null,
      value: 'a',
      isAuthenticated: false,
      loadReferralsToggle: 0
    }

  }

  _loadSampleReferral() {
    const toggle = this.state.loadReferralsToggle ? 0 : 1
    this.setState({ loadReferralsToggle: this.state.loadReferralsToggle ? 0 : 1 })
    this.setState({ referrals: this.state.loadReferralsToggle ? null : sampleReferrals })
}
  _handleTabChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={medrefrTheme}>
        <div>
            {/* temp onscreen redirection */}
            <DebugTempLink />
            <Header />

            {/* temp temp load static data button */}
            <button onClick={this._loadSampleReferral}>{this.state.loadReferralsToggle ? 'Clear data' : 'Load data'}</button>

            <PageTab referrals={this.state.referrals}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
