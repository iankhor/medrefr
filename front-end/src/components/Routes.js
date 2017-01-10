import React from 'react'

//Routes
import NotFound from './shared/NotFound'
import App from './Auth/App/App';
import Profile from './Auth/App/Profile'
import PageOne from './PageOne'
import MainPage from './MainPage/MainPage'
import ReferralDashboard from './Auth/App/ReferralDashboard'

import { BrowserRouter , Match, Miss } from 'react-router'

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