import React, { Component } from 'react'

class JSONDebugger extends Component {
    render(){
        return(
              <pre>
                <h2>JSON Debugger</h2>
                {JSON.stringify(this.props.json, null, 2)}
              </pre>
        )
    }
}

export default JSONDebugger

