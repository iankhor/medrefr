import React, { Component } from 'react'
import '../../css/style.css'
import logo from '../../../assets/img/Logo-1.png'

class Header extends Component {
    render(){
        return(
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to MedReFR powered by ReACT and Material UI</h2>
            <p>This is the header</p>
          </div>
        )
    }
}

export default Header

