import React from 'react'
import { RaisedButton } from 'material-ui'
import auth from './../../api/initAuth'

class Profile extends React.Component {

  _getProfile = () => {
    const token_id = auth.getToken()
    auth.fetchProfile(token_id)
    const profile = auth.getProfile()
    console.log(profile)
    
  }


  render() {
  const profile = this.props.profile

    return(
      <div>
        <RaisedButton label="Get Profile" default={true} onTouchTap={ this._getProfile }  />
        <p>
          Surname: {profile.Surname}
        </p>
      </div>
    )
  }
}

export default Profile