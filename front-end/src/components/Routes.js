import React from 'react'

//Routes
import NotFound from './NotFound'
import MainPage from './MainPage/MainPage'
import Login from './Auth/Login'
import App from './Auth/App/App'
import ReferralDashboard from './Auth/App/ReferralDashboard'

import { BrowserRouter , Match, Miss } from 'react-router'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/Login" component={Login} />  
        <Match exactly pattern="/ReferralDashboard" component={App} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}

export default Routes