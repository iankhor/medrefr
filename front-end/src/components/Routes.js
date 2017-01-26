import React from 'react'

//Routes
import NotFound from './NotFound'
import MainPage from './MainPage/MainPage'
// import Login from './App/Login'
import App from './App/App'
// import SignUp from './App/SignUp'
// import ReferralForm from './App/ReferralForm'

import { BrowserRouter , Match, Miss } from 'react-router'

import AuthService from './../api/AuthService'
const auth = new AuthService(process.env.REACT_APP_AUTH_CLIENT_ID, process.env.REACT_APP_AUTH_DOMAIN_ADDRESS)

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/ReferralDashboard" component={App} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}



export default Routes