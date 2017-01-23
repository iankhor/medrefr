import React, { Component } from 'react'

// referral components
import ReferralCard from './ReferralCard'
import { RaisedButton } from 'material-ui'

const style = {
     addReferralButton :{
         textAlign: 'center'
      },
      dashboard : {
          margin: '20px'
      }
}

class ReferralDashboard extends Component {
    constructor(props){
        super(props)
        this._renderReferrals = this._renderReferrals.bind(this)
        this._renderNewReferralForm = this._renderNewReferralForm.bind(this)
        this._toggleShowNewReferralForm = this._toggleShowNewReferralForm.bind(this)

        this.state = {
            showNewReferralForm: false
        }
    }

    _renderReferrals(key){
        const referral = this.props.referrals[key]
        // console.log('renderReferral - key ', key)
        return(
            <ReferralCard 
                key={key} 
                index={key}
                referral={referral}
                _updateReferral={this.props._updateReferral}
                _addReferral={this.props._addReferral}
                action="update"
            />
        )
    }

    _toggleShowNewReferralForm(){
        this.setState( { showNewReferralForm : !this.state.showNewReferralForm })
        console.log('new form toggle', this.state.showNewReferralForm)
    }

    _renderNewReferralForm(){
        return(
            <ReferralCard 
                _updateReferral={this.props._updateReferral}
                _addReferral={this.props._addReferral}
                _toggleShowNewReferralForm={this._toggleShowNewReferralForm}
                action="new"
            />
        )
    }

    render(){
        //  console.log('before toggle', this.state.showNewReferralForm)
        return(
                <div style={style.dashboard}>
                    <br />
                        <RaisedButton 
                                label="Add new referral" 
                                primary={true} 
                                onClick={this._toggleShowNewReferralForm}
                                style={style.addReferralButton}
                        />
                    <br />

                    {this.state.showNewReferralForm ? this._renderNewReferralForm() : null }
                    {Object.keys(this.props.referrals).map(this._renderReferrals)}
                </div> 
        )
    }
}

export default ReferralDashboard

