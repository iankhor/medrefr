import React, { Component } from 'react'


// body components
import BodySectionOne from './BodySectionOne'
import BodySectionTwo from './BodySectionTwo'
import BodySectionThree from './BodySectionThree'

const style = {
    margin: '20px',
    backgroundColor: 'blue'
}

const BodyList = (props) => {
        return(
            <div className="generic-center" style={style}> 
                <h1>This is a Body List component</h1>
                <BodySectionOne />
                <BodySectionTwo />
                <BodySectionThree />
            </div>
        )
}

export default BodyList

