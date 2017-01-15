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
    .catch( (e) => {
        console.log('error object',e)
        console.log('error message',e.message)
        console.log('error status',e.response.status)
    })
}