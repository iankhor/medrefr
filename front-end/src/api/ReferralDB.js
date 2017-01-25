import axios from 'axios'

export function createReferral(referral){
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

export function updateReferral(referral){
    console.log('backend: sending updated referral to backend')
    const updateReferralLink = process.env.REACT_APP_API_URL + '/referral/update' + '/' + referral._id
    console.log("backend:",  updateReferralLink)
    console.log("backend:", referral)

    axios.patch( updateReferralLink, referral)
    .then( createReferralPromise => {
      console.log(createReferralPromise.data)
    })
    .catch( (error) => {
       console.log('Error', error.message)
    })
}

export function fetchAllReferral(){
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