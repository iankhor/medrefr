import React, { Component } from 'react'
import { fetchAllStaffProfiles } from '../../api/staff-profilesDB'
//material-ui components
import { TextField } from 'material-ui/';
import Profile from './Profile'

class AllProfiles extends Component {
  constructor(props) {
    super(props)
    // this._showProfiles = this._showProfiles.bind(this)
    this.state = {
      staffProfiles: null
    }
  }

  componentWillMount(){
    console.log('getting profiles')

    fetchAllStaffProfiles()
    .then ( result => {
      console.log(result.profiles)
      this.setState({
        staffProfiles: result.profiles
      })
    })
  }

    render(){

    const staffProfiles = this.state.staffProfiles
      return(

          <div className="border">
            {staffProfiles ? (
              staffProfiles.map((staffProfile) => {
                return <Profile key={ staffProfile._id }
                  profile={staffProfile}
                />
              })
            ) : "No data"}

          </div>
      )
    }
}

export default AllProfiles

