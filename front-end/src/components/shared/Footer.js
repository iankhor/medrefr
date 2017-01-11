import React, { Component } from 'react'
import '../../css/style.css'
import FA from 'react-fontawesome'

class Footer extends Component {
    render(){
        return(
          <div className="Footer">
            <p>Designed by .this</p>
            <FA
              name="linkedin"
              border={true}
              size="1x"
            />

            <FA
              name="facebook"
              border={true}
              size="1x"
            />

          </div>
        )
    }
}

export default Footer

