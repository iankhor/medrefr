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
    this._fetchRawReferralData = this._fetchRawReferralData.bind(this)
    this._loadReferrals = this._loadReferrals.bind(this)
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

  _loadReferrals(){

    let referralsWithoutGPProfiles, populatedGPProfileReferrals  = {}

    switch(this.state.profile.role) {
      case 'triage':
        referralsWithoutGPProfiles = this._fetchRawReferralData('triage')
        populatedGPProfileReferrals = this._popupateGPDataInReferral(referralsWithoutGPProfiles)
        break
      case 'gp':
        referralsWithoutGPProfiles = this._fetchRawReferralData('gp')
        populatedGPProfileReferrals = this._popupateGPDataInReferral(referralsWithoutGPProfiles)
        break
      case 'psychiatrist':
        referralsWithoutGPProfiles = this._fetchRawReferralData('psychiatrist')
        populatedGPProfileReferrals = this._popupateGPDataInReferral(referralsWithoutGPProfiles)
        break
      default:
        console.log('err not logged in')
    }
    this.setState({ referrals: populatedGPProfileReferrals })
  }

  _fetchRawReferralData(role) {

    let filteredReferrals = {}
    switch(role) {
      case 'triage':
        filteredReferrals = sampleReferrals
        break
      case 'gp':
        Object.keys(sampleReferrals)
          .map( referralKey => {
            if (sampleReferrals[referralKey].gp_id === this.state.profile._id) {
              filteredReferrals[referralKey] = sampleReferrals[referralKey]
            }
          })
        break
      case 'psychiatrist':
        Object.keys(sampleReferrals)
          .map( referralKey => {
            if (sampleReferrals[referralKey].assignedSpecialist_id === this.state.profile._id) {
              filteredReferrals[referralKey] = sampleReferrals[referralKey]
            }
          })
        break
      default:
      // do nothing
    }
    return filteredReferrals
  }

  _popupateGPDataInReferral(filteredReferrals){
    let populatedGPProfileReferrals = {}
    // With filteredReferrals, add gp details to referral and call it populatedReferrals
    Object.keys(filteredReferrals)
    .map( key => {
      //extract gpProfile from sampleProfiles associated with current referral
      let gpProfile = sampleProfile.find( profile => profile._id === filteredReferrals[key].gp_id)
      let whiteListgpProfile = this._whiteListGPProfile(gpProfile)
      populatedGPProfileReferrals[key] = Object.assign({}, filteredReferrals[key], whiteListgpProfile )
    })
    return populatedGPProfileReferrals
  }

  _whiteListGPProfile(gpProfile){
    //whitelisting profile attributes
    let { doctorSurname, 
          doctorGivenName, 
          doctorClinic, 
          doctorAddress, 
          doctorPostcode,
          doctorContactNumber } = gpProfile

    return{ doctorSurname, 
            doctorGivenName, 
            doctorClinic, 
            doctorAddress, 
            doctorPostcode,
            doctorContactNumber }
  }


  _loadSampleProfileTriage() {
    this.setState({ profile: sampleProfile.find( profile => profile._id === '1') })
    console.log('triage', this.state.profile)
  }

  _loadSampleProfileGP1() {
    this.setState({ profile: sampleProfile.find( profile => profile._id === '2') })
    console.log('gp1', this.state.profile)
  }

  _loadSampleProfileGP2() {
    this.setState({ profile: sampleProfile.find( profile => profile._id === '3') })
    console.log('gp2', this.state.profile)
  }

  _loadSampleProfilePsychiatrist1() {
    this.setState({ profile: sampleProfile.find( profile => profile._id === '4') })
    console.log('psychiatrist1', this.state.profile)
  }

  _loadSampleProfilePsychiatrist2() {
    this.setState({ profile: sampleProfile.find( profile => profile._id === '5') })
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
            <li><button onClick={this._loadReferrals}>(Step X)Prepare Referrals</button></li>
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
