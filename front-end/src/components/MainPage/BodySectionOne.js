import React, { Component } from 'react'
import { Parallax } from 'react-parallax';

const style = {
    margin: '0',
    height: '200px',

    h1: {
      margin: 'auto'
    }

}

const BodySectionOne = (props) => {
        return(
          <Parallax bgImage={require('./hero.jpg')} strength={400}>
            <div className="generic-center" style={style}>
                <h1>Conduit Health</h1>
            </div>
          </Parallax>
        )
}

export default BodySectionOne

