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
      referral: {
                  name: 'steve jobs',
                  providerNumber: '12345'
                }
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

          {/*
          <div className="border color-blue">
              <p>YOLO</p>
              <Link to='/PageOne'>Go to Page One</Link>
              <Link to='/Profile'>Go to Profile</Link>
              <br />
              <Link to='/ReferralDashboard'>Go to ReferralDashboard</Link>
              <br />
              <Link to='/MainPage'>Go to MainPage</Link>
              <br/>
          </div>
          */}

           {/* Render children here*/}
           {/*this.props.children*/} 
           <ReferralDashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
