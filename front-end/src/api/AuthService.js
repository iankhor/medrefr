import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import auth0 from 'auth0-js'
import axios from 'axios'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    // Configure Auth0
    this.auth0 = new auth0.WebAuth({
      clientID: clientId,
      domain: domain,
      responseType: 'token id_token',
      redirectUri: `${window.location.origin}/`
    })

    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.loginWithGoogle = this.loginWithGoogle.bind(this)
  }

  login(username, password) {
    this.auth0.client.login({
      realm: process.env.REACT_APP_AUTH_CONNECTION,
      username,
      password
    }, (err, authResult) => {
      if (err) {
        alert('Error: ' + err.description)
        return
      }
      if (authResult && authResult.idToken && authResult.accessToken) {
        this.setToken(authResult.accessToken, authResult.idToken)
        console.log('code to redirect to main page')
        // browserHistory.replace('/home')

        this.fetchProfile(authResult.accessToken)

      }
    })
  }

  signup(email, password){
    this.auth0.redirect.signupAndLogin({
      connection: process.env.REACT_APP_AUTH_CONNECTION,
      email,
      password,
    }, function(err) {
      if (err) {
        alert('Error: ' + err.description)
      }
    })
  }

  loginWithGoogle() {
    this.auth0.authorize({
      connection: 'google-oauth2',
    })
  }

  parseHash(hash) {
    this.auth0.parseHash({ hash }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setToken(authResult.accessToken, authResult.idToken)
        console.log('AuthService parseHash : code to transition to /')
        // browserHistory.replace('/home')
        this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            console.log('Error loading the Profile', error)
          } else {
            this.setProfile(profile)
          }
        })
      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error)
      }
    })
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(accessToken, idToken) {
    // Saves user access token and ID token into local storage
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('id_token', idToken)
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile)
  }

  fetchProfile(token_id) {

    //get userinfo by from access token
    this.auth0.client.userInfo(token_id, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        this.setProfile(profile)
      }
    })
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  getAccessToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('access_token')
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }


  axiosGetToken() {
    const config = {
                      method:   'post',
                      url:      'https://' + process.env.REACT_APP_AUTH_DOMAIN_ADDRESS +'/oauth/ro',
                      headers: { 'Content-Type' : 'application/json'},
                      data:     {
                                    client_id:  process.env.REACT_APP_AUTH_CLIENT_ID,
                                    username:   "test1234@test1234.com",
                                    password:   "test1234",
                                    connection: process.env.REACT_APP_AUTH_CONNECTION,
                                    scope: "openid"
                                }
                  }

    axios(config)
    .then( getToken => {
      const token = getToken.data
      // console.log(token)
      this.setToken(token.access_token, token.id_token)
    })
    .catch( (error) => {
      error.response ? console.log(error.response.data) : console.log('Error', error.message)
    })
  }


  axiosGetProfile() {
    const accessToken = this.getAccessToken()
    const config = {
                      method:   'get',
                      url:      'https://' + process.env.REACT_APP_AUTH_DOMAIN_ADDRESS + '/userinfo',
                      headers: { 'Authorization' : 'Bearer ' + accessToken },
                  }

    return axios(config)
    .then( getProfile => {
      const profile = getProfile.data
      // console.log('authservice axiosGetProfile',profile)
      return profile
    })
    .catch( (error) => {
      error.response ? console.log(error.response.data) : console.log('Error', error.message)
    })
  }

}




