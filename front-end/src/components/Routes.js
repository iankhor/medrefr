import React from 'react'

//Routes
import NotFound from './NotFound'
import MainPage from './MainPage/MainPage'
import Login from './App/Login'
import App from './App/App'
import SignUp from './App/SignUp'

import { BrowserRouter , Match, Miss } from 'react-router'


const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/Login" component={Login} />  
        <Match exactly pattern="/ReferralDashboardTemp" component={App} />  
        <Match exactly pattern="/SignUp" component={SignUp} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}



export default Routes