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
    this._prepareReferralTest = this._prepareReferralTest.bind(this)
    this._loadSampleReferralGP = this._loadSampleReferralGP.bind(this)
    this._loadSampleReferralPsy = this._loadSampleReferralPsy.bind(this)
    this._loadSampleReferralGP = this._loadSampleReferralGP.bind(this)
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

  _prepareReferralTest(){
    //Get all referral / profiles

    //Get referrals related to current user logged in, call it filteredReferrals

    //With filteredReferrals, add gp details to referral and call it populatedReferrals

    //Set state of referrals with populatedReferrals

  }

  _loadSampleReferralGP() {
    const filteredReferrals = {}
    // this.setState({ referrals: sampleReferrals })
    console.clear()
    // console.log('sample Referrals' , sampleReferrals)
    // console.log('Object key  : ', Object.keys(sampleReferrals))
    console.log('current GP id :' , this.state.profile._id)

    Object.keys(sampleReferrals)
    .map( referralKey => {
      if (sampleReferrals[referralKey].gp_id === this.state.profile._id) {
        console.log(sampleReferrals[referralKey])
        filteredReferrals[referralKey] = sampleReferrals[referralKey]
      }
    }
    )
    console.log('filteredReferrals :' ,filteredReferrals)
    
    this.setState({ referrals: filteredReferrals })
  }

  _loadSampleReferralPsy() {
    const filteredReferrals = {}
    // this.setState({ referrals: sampleReferrals })
    console.clear()
    // console.log('sample Referrals' , sampleReferrals)
    // console.log('Object key  : ', Object.keys(sampleReferrals))
    console.log('current Psy id :' , this.state.profile._id)

    Object.keys(sampleReferrals)
    .map( referralKey => {
      if (sampleReferrals[referralKey].assignedSpecialist_id === this.state.profile._id) {
        console.log(sampleReferrals[referralKey])
        filteredReferrals[referralKey] = sampleReferrals[referralKey]
      }
    }
    )
    console.log('filteredReferrals :' ,filteredReferrals)
    this.setState({ referrals: filteredReferrals })
  }

  _loadSampleProfileTriage() {
    this.setState({ profile: sampleProfile.triage })
    console.log('triage', this.state.profile)
  }

  _loadSampleProfileGP1() {
    this.setState({ profile: sampleProfile.gp })
    console.log('gp1', this.state.profile)
  }

  _loadSampleProfileGP2() {
    this.setState({ profile: sampleProfile.gp2 })
    console.log('gp2', this.state.profile)
  }

  _loadSampleProfilePsychiatrist1() {
    this.setState({ profile: sampleProfile.psychiatrist })
    console.log('psychiatrist1', this.state.profile)
  }

  _loadSampleProfilePsychiatrist2() {
    this.setState({ profile: sampleProfile.psychiatrist2 })
    console.log('psychiatrist2', this.state.profile)
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
          <ul>
            <li><button onClick={this._loadSampleProfileTriage}>(Step 1.0) Load sample profile Triage</button></li>
            <li><button onClick={this._loadSampleProfileGP1}>(Step 1.1) Load sample profile GP 1</button></li>
            <li><button onClick={this._loadSampleProfileGP2}>(Step 1.2) Load sample profile GP 2</button></li>
            <li><button onClick={this._loadSampleProfilePsychiatrist1}>(Step 1.3) Load sample profile Psychiatrist 1</button></li>
            <li><button onClick={this._loadSampleProfilePsychiatrist2}>(Step 1.4) Load sample profile Psychiatrist 2</button></li>
            <br/>
            <li><button onClick={this._loadSampleReferralGP}>(Step 2) Load sample referrals for GP</button></li>
            <li><button onClick={this._loadSampleReferralPsy}>(Step 2) Load sample referrals for Psy</button></li>
            <br/>
            <li><button onClick={this._prepareReferralTest}>(Step X)Prepare Referrals</button></li>
          </ul>


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
