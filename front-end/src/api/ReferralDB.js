import axios from 'axios'

export function CreateReferral(referral){
    console.log('sending referral to backend')
    const createReferralLink = 'http://localhost:4000/referral/create'

    axios.post( createReferralLink, referral)
    .then( createReferralPromise => {
      console.log(createReferralPromise.data)
    })
    .catch( (error) => {
      error.response ? console.log(error.response.data) : console.log('Error', error.message)
    })
}