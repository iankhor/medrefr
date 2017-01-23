import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ReferralDashboard from './ReferralDashboard'
import Profile from './Profile'

export default class PageTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Referral" value={0} />
          <Tab label="My Account" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >

          <ReferralDashboard 
            referrals={this.props.referrals} 
            _addReferral={this.props._addReferral} 
            _updateReferral={this.props._updateReferral} 

          />

          <Profile />

        </SwipeableViews>
      </div>
    );
  }
}
