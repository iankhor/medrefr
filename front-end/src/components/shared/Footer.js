import React, { Component } from 'react'
import '../../css/style.css'
import FA from 'react-fontawesome'

class Footer extends Component {
    render(){
        return(
          <div className="Footer">
            <FA 
              name="linkedin"
              border={true}
              size="3x" 
            />

            <FA 
              name="facebook"
              border={true}
              size="3x" 
            />
            
          </div> 
        )
    }
}

export default Footer

