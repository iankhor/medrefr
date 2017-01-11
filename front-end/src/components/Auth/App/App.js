import React, { Component } from 'react';
import '../../../css/style.css'
import { Link } from 'react-router'
import SwipeableViews from 'react-swipeable-views'
import injectTapEventPlugin from 'react-tap-event-plugin';

//App components
import ReferralDashboard from './ReferralDashboard'
import sampleReferrals from './_sample-referrals.js'
import Header from '../../shared/Header'
import DebugTempLink from '../../../utils/DebugTempLink'

//material-ui components
import { AppBar,
         TextField,
         Tabs,
         Tab } from 'material-ui/';

//theme related material-ui
import { MuiThemeProvider,
         getMuiTheme,
         darkBaseTheme } from 'material-ui/styles'

//inline styles
const styles = {
    tabComponent : {
        headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    }
  }
}

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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
            {/* temp onscreen redirection */}
            <DebugTempLink />

            <Header />


            <ReferralDashboard 
              _loadSampleReferral={this._loadSampleReferral}
              referrals={this.state.referrals}
            />
            
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
