import React, { Component } from 'react'

const style = {
    margin: '20px',
    backgroundColor: 'green'
}

const BodySectionOne = (props) => {
        return(
            <div className="generic-center" style={style}> 
                <h1>This is a BodySectionOne component</h1>
            </div>
        )
}

export default BodySectionOne

