import api from './init';


export function fetchAllStaffProfiles(){
    console.log('Getting Staff Profile')

    return api.get('/staff-profiles/')
    .then( response => {
        // console.log('type of : ', typeof allReferrals.data)
        return response.data

    })
    .catch( (error) => {
      error.response ? console.log(error.response.data) : console.log('Error', error.message)
    })
}
