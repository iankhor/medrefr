import React, { Component } from 'react'
import StaticHTMLTemplate from './_TemplateStaticHTML'

class TemplateComponent extends Component {
    render(){
        return(
            <div className="generic-center"> 
                <h1>This is a componentTemplate page</h1>
                <h2>...</h2>
                <StaticHTMLTemplate />
            </div>
        )
    }
}

export default TemplateComponent

