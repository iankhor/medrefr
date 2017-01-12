import React, { Component } from 'react'
import '../../css/style.css'
import FA from 'react-fontawesome'



class Footer extends Component {
    render(){
        return(
          <div className="Footer"  >

           <br />
            <FA
              name="linkedin"
              border={true}
              size="2x"
            />
            <FA
              name="facebook"
              border={true}
              size="2x"
            />
            <br />
            <p>Beautifully designed with ❤️ by .this</p>
          </div>
        )
    }
}

export default Footer

