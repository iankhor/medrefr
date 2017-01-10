import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import '../css/style.css'
import { Link } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

//App components
import ReferralDashboard from './ReferralDashboard'

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
      referrals: [{
                  _id:            1,
                  name:           'steve jobs',
                  providerNumber: '11111'
                 },
                 {
                  _id:            2,
                  name:           'steve wozzie',
                  providerNumber: '22222'
                }]
    }

  }

  _loadSampleReferral(e) {
    console.log(e.target)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to MedReFR powered by ReACT and Material UI</h2>
          </div>

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
