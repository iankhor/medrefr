import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    margin: '100',
    marginRight: '150',
    marginTop: '200',
    marginLeft: '30vw',
    height: '100vh',
    lineHeight: '3em',
    textAlign: 'right',
    letterSpacing: '.1em',
}

const buttonstyle = {
  margin: 12,
  lineHeight: 0,
}

const Hero = (props) => {
        return(
          <Parallax bgImage={require('./heroimage.png')} bgHeight="125vh" strength={400}>
            <div style={style}>
                <h1>MedRefr</h1>
                <br />
                <h2>Get telepsychiatry from the comfort of your own home</h2>
                <br />
                <RaisedButton label="Emergency" primary={true} style={buttonstyle}/>
                <RaisedButton label="Contact Us" secondary={true} style={buttonstyle}/>
            </div>
          </Parallax>
        )
}

export default Hero

