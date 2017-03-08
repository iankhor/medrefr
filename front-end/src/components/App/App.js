import React, { Component } from 'react';
import './../../css/style.css'
// import axios from 'axios'

import { createReferral,
         fetchAllReferral,
         updateReferral } from './../../api/ReferralDB'

//App components
import sampleReferrals from './_sample-referrals.js'
import sampleProfile from './_sample-profile.js'
import Header from '../shared/Header'
import PageTab from './PageTab'

//theme related material-ui
import { MuiThemeProvider } from 'material-ui/styles'

import medrefrTheme from './../styles/Theme'

class App extends Component {
  constructor() {
    super()
    this._loadSampleReferral = this._loadSampleReferral.bind(this)
    this._loadSampleProfileTriage = this._loadSampleProfileTriage.bind(this)
    this._loadSampleProfileGP1 = this._loadSampleProfileGP1.bind(this)
    this._loadSampleProfileGP2 = this._loadSampleProfileGP2.bind(this)
    this._loadSampleProfilePsychiatrist1 = this._loadSampleProfilePsychiatrist1.bind(this)
    this._loadSampleProfilePsychiatrist2 = this._loadSampleProfilePsychiatrist2.bind(this)
    this._handleTabChange = this._handleTabChange.bind(this)
    this._addReferral = this._addReferral.bind(this)
    this._updateReferral = this._updateReferral.bind(this)

    this.state = {
      referrals: {},
      profile: {},
      value: 'a',
    }
  }

  componentWillMount(){
    let AllReferralsPromise = fetchAllReferral()
    AllReferralsPromise
    .then( allReferralsData => {
      // console.log('allReferralsData',allReferralsData)
      this.setState( { referrals: allReferralsData.referrals } )
    })
  }

  _addReferral(referral) {
    //update referral state
    const referrals = {...this.state.referrals}
    console.log('addreferral',referral)

    //add in new referral
    const timestamp = Date.now()
    referrals[`referral-${timestamp}`] = referral

    //set state
    this.setState( { referrals } )

    //send to db

    createReferral(referral)

  }

    _updateReferral(key, referral) {

    const referrals = {...this.state.referrals}
    //update referral state

    const currentReferral = referrals[key]
    const updatedReferral = currentReferral

    Object.keys(referral).map( (index) => updatedReferral[index] = referral[index] )

    // //set state
    console.log('updating - updatedReferral:',updatedReferral)
    this.setState( { referrals } )

    // update db
    updateReferral(updatedReferral)

  }

  _loadSampleReferral() {
    this.setState({ referrals: sampleReferrals })
    console.log('Object key  : ', Object.keys(this.state.referrals))
    
    console.log('current GP id :' , this.state.profile._id)

    // Object.keys(this.state.referrals)
    // .map( referralKey => 
    //   console.log(this.state.referrals[referralKey])
    // )
       
    Object.keys(this.state.referrals)
    .map( referralKey => {
      if (this.state.referrals[referralKey].gp_id === this.state.profile._id) {
        console.log(this.state.referrals[referralKey])
      }
    }
    )
    


  }

  _loadSampleProfileTriage() {
    this.setState({ profile: sampleProfile.triage })
    console.log('triage', this.state.profile)
  }

  _loadSampleProfileGP1() {
    this.setState({ profile: sampleProfile.gp })
    console.log('gp', this.state.profile)
  }

  _loadSampleProfileGP2() {
    this.setState({ profile: sampleProfile.gp2 })
    console.log('gp', this.state.profile)
  }

  _loadSampleProfilePsychiatrist1() {
    this.setState({ profile: sampleProfile.psychiatrist })
    console.log('psychiatrist', this.state.profile)
  }

  _loadSampleProfilePsychiatrist2() {
    this.setState({ profile: sampleProfile.psychiatrist2 })
    console.log('psychiatrist', this.state.profile)
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
            <Header />

            {/* temp temp load static data button */}
            <button onClick={this._loadSampleProfileTriage}>(Step 1) Load sample profile Triage</button>
            <button onClick={this._loadSampleProfileGP1}>(Step 1.1) Load sample profile GP 1</button>
            <button onClick={this._loadSampleProfileGP2}>(Step 1.2) Load sample profile GP 2</button>
            <button onClick={this._loadSampleProfilePsychiatrist1}>(Step 1.3) Load sample profile Psychiatrist 1</button>
            <button onClick={this._loadSampleProfilePsychiatrist2}>(Step 1.4) Load sample profile Psychiatrist 2</button>
            <button onClick={this._loadSampleReferral}>(Step 2) Load sample referrals</button>


            <PageTab
              profile={this.state.profile}
              referrals={this.state.referrals}
              _addReferral={this._addReferral}
              _updateReferral={this._updateReferral}
            />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
