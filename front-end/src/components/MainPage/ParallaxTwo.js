import React from 'react'
import { Parallax } from 'react-parallax';
import ParallaxImg from './../../../assets/img/parallax.png'

const style = {
    height: 300
}

const ParallaxTwo = (props) => {
        return(
          <Parallax bgImage={ ParallaxImg } bgWidth="100vw" strength={400}>
            <div className="generic-center" style={style}>
            </div>
          </Parallax>
        )
}

export default ParallaxTwo

