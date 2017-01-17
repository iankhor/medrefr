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
    this._addReferral = this._addReferral.bind(this)

    this.state = {
      referrals: {},
      value: 'a',
      isAuthenticated: false,
      loadReferralsToggle: 0
    }

  }

  _addReferral(referral) {
    //update referral state 
    const referrals = {...this.state.referrals}

    //add in new referral
    const timestamp = Date.now()
    referrals[`referral-${timestamp}`] = referral

    //set state
    this.setState( { referrals } )
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

            <PageTab 
              referrals={this.state.referrals}
              _addReferral={this._addReferral}
            />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
