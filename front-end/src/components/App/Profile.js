import React from 'react'

class Profile extends React.Component {

  render() {
  const profile = this.props.profile

    return(
      <div>
        <p>
          Surname: {profile.Surname}
        </p>
      </div>
    )
  }
}

export default Profile