import React, { Component } from 'react'

const style = {
    margin: 0,
    backgroundColor: '#FFF',
    padding: '6em',
    lineHeight: '1.5em'
}

const Emergency = (props) => {
        return(
          <section id="emergency">
            <div className="generic-center" style={style} >
                <h1>Emergencies</h1>
                <br />
                <p>Our services does not offer crisis intervention treatment.</p>
                <br />
                <p>Should you or anyone you know, require urgent assessment,
                  please call the Psychiatric Triage Service on 1300369012 or call 000
                  for the Emergency Line.</p>
                <br />
                <p>If you are able to drive or you know anyone who is able to
                  drive you, please head to your nearest local hospital emergency
                  department.</p>
            </div>
          </section>
        )
}

export default Emergency

