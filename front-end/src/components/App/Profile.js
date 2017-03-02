import React from 'react'
import { RaisedButton } from 'material-ui'
import auth from './../../api/initAuth'

class Profile extends React.Component {

  _getToken = () => {
    auth.axiosGetToken()
  }

  _getProfile = () => {
    auth.axiosGetProfile()
    .then( profile => {
      console.log('app profile : ', profile)
    })
  }


  render() {
  const profile = this.props.profile

    return(
      <div>
        <RaisedButton label="Axios Get Token" default={true} onTouchTap={ this._getToken }  />
        <RaisedButton label="Axios Get Profile" default={true} onTouchTap={ this._getProfile }  />
        <p>
          Surname: {profile.Surname}
        </p>
      </div>
    )
  }
}

export default Profile