import React from 'react'

//Routes
import NotFound from './shared/NotFound'
import App from './App';
import PageOne from './PageOne'

import { BrowserRouter , Match, Miss } from 'react-router'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />  
        <Match exactly pattern="/PageOne" component={PageOne} />  
        <Miss component={NotFound} />  
      </div>
    </BrowserRouter>
  )
}

export default Routes