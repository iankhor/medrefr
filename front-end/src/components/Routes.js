import React from 'react'

import AuthService from './../utils/AuthService'
const auth = new AuthService(process.env.REACT_APP_AUTH_KEY,
                             toString(process.env.RAECT_APP_AUTH_DOMAIN)
)
// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/Login' })
  }
}

const parseAuthHash = (nextState, replace) => {
  if (nextState.location.hash) {
    const results = auth.parseHash(nextState.location.hash)
    replace({ pathname: '/' })
  }
}

//Routes
import NotFound from './NotFound'
import MainPage from './MainPage/MainPage'
import Login from './Auth/Login'
import App from './Auth/App/App'

import { BrowserRouter , Match, Miss } from 'react-router'


const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/Login" component={Login} />  
        <Match exactly pattern="/ReferralDashboardTemp" component={App} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}



export default Routes