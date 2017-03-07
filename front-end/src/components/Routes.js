import React from 'react'
import auth from './../api/initAuth'
import { BrowserRouter, 
         Match, 
         Miss, 
         Redirect } from 'react-router'

//Routes
import NotLoggedInTemp from './NotLoggedInTemp'
import NotFound from './NotFound'
import MainPage from './MainPage/MainPage'
import App from './App/App'

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    auth.loggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/NotLoggedInTemp',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={MainPage} />  
        <Match exactly pattern="/NotLoggedInTemp" component={NotLoggedInTemp} />  
        <Match exactly pattern="/ReferralDashboard" component={App} />

        {/* Auth disabled temporarily *}
        {/* <MatchWhenAuthorized exactly pattern="/ReferralDashboard" component={App} /> */}
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}



export default Routes