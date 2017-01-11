import React, { Component } from 'react'


// body components
import BodySectionOne from './BodySectionOne'
import BodySectionTwo from './BodySectionTwo'
import BodySectionThree from './BodySectionThree'


const BodyList = (props) => {
        return(
            <div className="generic-center" >
                <BodySectionOne />
                <BodySectionTwo />
                <BodySectionThree />
            </div>
        )
}

export default BodyList

