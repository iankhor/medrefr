import React, { Component } from 'react'
import { Parallax } from 'react-parallax';

const style = {
    height: 300


}

const ParallaxTwo = (props) => {
        return(
          <Parallax bgImage={require('./parallaxtwo.png')} bgWidth="100vw" strength={400}>
            <div className="generic-center" style={style}>
            </div>
          </Parallax>
        )
}

export default ParallaxTwo

