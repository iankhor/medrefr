import React from 'react'

class Profile extends React.Component {

  render() {
  const profile = this.props.profile

    return(
      <div>
        <p>
          Surname: {profile.surname}
          Name: {profile.givenName}
          DOB: {profile.dateOfBirthDay} {profile.dateOfBirthMonth} {profile.dateOfBirthYear}
          Provider Number: {profile.providerNumber}
          Contact Number: {profile.contactNumber}
          Place Of Practice: {profile.primaryPlaceOfPractice}
          Role: {profile.role}
          Sub-specialty: {profile.subSpecialty}
          User ID: {profile.userID}
        </p>
      </div>
    )
  }
}

export default Profile