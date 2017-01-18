import React, { Component } from 'react'
import { Parallax } from 'react-parallax';

const style = {
    margin: '100',
    marginTop: '200',
    marginLeft: '30vw',
    height: '100vh',
    lineHeight: '3em',
    textAlign: 'right',
    letterSpacing: '.2em'

}

const Hero = (props) => {
        return(
          <Parallax bgImage={require('./heroimage.png')} bgHeight="125vh" strength={400}>
            <div style={style}>
                <h1>Conduit Health</h1>
                <br />
                <h2>Get telepsychiatry from the comfort of your own home</h2>
            </div>
          </Parallax>
        )
}

export default Hero

