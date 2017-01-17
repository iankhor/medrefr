import React from 'react'

//Routes
import NotFound from './NotFound'
import MainPage from './MainPage/MainPage'
// import Login from './App/Login'
import App from './App/App'
// import SignUp from './App/SignUp'
import ReferralForm from './App/ReferralForm'
import AddReferral from './App/AddReferral'

import { BrowserRouter , Match, Miss } from 'react-router'


const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/ReferralDashboardTemp" component={App} />  
        <Match exactly pattern="/ReferralForm" component={ReferralForm} />  
        <Match exactly pattern="/AddReferral" component={AddReferral} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}



export default Routes