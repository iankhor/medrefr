import React from 'react'

class Profile extends React.Component {

  render() {
  const profile = this.props.profile

    return(
      <div>
        Surname: {profile.Surname}
      </div>
    )
  }
}

export default Profile