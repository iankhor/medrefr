import axios from 'axios'
import decodeJWT from 'jwt-decode'
import { writeToken } from './jwt'

export function signIn( { email, password } ){
    const signInLink = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_AUTH_SIGNIN
    const requestBody = { email, password }
   
    console.log('object type link', typeof signInLink)
    console.log('post req link', signInLink)
    console.log('object type body',typeof requestBody)
    console.log('body',requestBody)

    axios.post(
        signInLink,
        requestBody,
    )
    .then( signInPromise => {
        const token = signInPromise.data.token
        console.log('token', token)
        writeToken(token)
        return decodeJWT(token)
    })
    .catch( (error) => {
        if (error.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else {
        // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
        }
            console.log(error.config)
    })
}