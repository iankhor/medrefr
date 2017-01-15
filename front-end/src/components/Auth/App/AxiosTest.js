import React, { Component, PropTypes as T } from 'react'
import JSONDebugger from './../../../utils/JSONDebugger'

import DebugTempLink from '../../../utils/DebugTempLink'

import RaisedButton from 'material-ui/RaisedButton'

//Material UI theme
import { MuiThemeProvider,
         getMuiTheme } from 'material-ui/styles'

import medrefrTheme from './../../styles/Theme'

const style = {
    referralOptions :{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    uploadButton :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card :{
        marginBottom : 15
    },
    cardActions :{
        textAlign: 'right'
    },
    paperStyle: {
    //   width: 300,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
  },
}

const errorMessages = {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
}

class AxiosTest extends Component {
    constructor(props) {
      super(props)
      this.state = {
          canSubmit: true,
          debugjSON: null
      }   
      
    }


    render(){
        
        return(
            <MuiThemeProvider muiTheme={medrefrTheme}>
            <div className="generic-center"> 
                <DebugTempLink />
                {/* temp onscreen redirection */}
                <h1>This is a Axios Test Page</h1>

                <JSONDebugger json={this.state.debugjSON} />

                <RaisedButton
                    label="Get Request"
                />


            </div>
            </MuiThemeProvider>

        )
    }
}

export default AxiosTest