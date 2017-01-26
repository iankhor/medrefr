import React, { Component } from 'react'
import '../../css/style.css'
import ToolBar from './ToolBar'

// const style = {
//   position: 'fixed',
//   zIndex: '1000'
// }

class Header extends Component {
    render(){
        return(
          <div className="App-header" >
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <ToolBar title="MedReFR"/>
            {/* <h2>Welcome to MedRefer powered by React and Material UI</h2>
            <p>Telehealth for Psychiatry</p> */}
          </div>
        )
    }
}

export default Header

