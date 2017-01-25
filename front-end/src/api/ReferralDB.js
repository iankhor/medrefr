import axios from 'axios'

export function CreateReferral(referral){
    console.log('sending referral to backend')
    const createReferralLink = process.env.REACT_APP_API_URL + '/referral/create'

    axios.post( createReferralLink, referral)
    .then( createReferralPromise => {
      console.log(createReferralPromise.data)
    })
    .catch( (error) => {
      error.response ? console.log(error.response.data) : console.log('Error', error.message)
    })
}

export function GetAllReferral(){
    console.log('getting referral from backend')
    const getAllReferralLink = process.env.REACT_APP_API_URL + '/referral/all'

    let ReferralPromise = axios.get(getAllReferralLink)
    .then( allReferrals => {
        // console.log('type of : ', allReferrals.data)
        return allReferrals.data
    })
    .catch( (error) => {
      error.response ? console.log(error.response.data) : console.log('Error', error.message)
    })

    return ReferralPromise
}