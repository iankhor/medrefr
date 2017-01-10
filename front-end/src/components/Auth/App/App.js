import React, { Component } from 'react';
import '../../../css/style.css'
import { Link } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

//App components
import ReferralDashboard from './ReferralDashboard'
import sampleReferrals from './_sample-referrals.js'
import Header from '../../shared/Header'

//material-ui components
import { AppBar,
         TextField } from 'material-ui/';

//theme related material-ui
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'

class App extends Component {
  constructor() {
    super()

    this._loadSampleReferral = this._loadSampleReferral.bind(this)

    this.state = {
      referrals: sampleReferrals
    }

  }

  _loadSampleReferral(e) {
    console.log(e.target)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
            <Header />
            <ReferralDashboard 
              _loadSampleReferral={this._loadSampleReferral}
              referrals={this.state.referrals}
            />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
