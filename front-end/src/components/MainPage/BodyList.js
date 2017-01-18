import React, { Component } from 'react'


// body components
import Hero from './Hero'
import AboutPage from './AboutPage'
import Emergency from './Emergency'
import ParallaxTwo from './ParallaxTwo'
import ParallaxThree from './ParallaxThree'
import Contact from './Contact'


const BodyList = (props) => {
        return(
            <div className="generic-center" >
                <Hero />
                <AboutPage />
                <ParallaxTwo />
                <Emergency />
                <ParallaxThree />
                <Contact />
            </div>
        )
}

export default BodyList

