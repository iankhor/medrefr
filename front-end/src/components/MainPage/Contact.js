import React from 'react'

const style = {
    margin: 0,
    backgroundColor: '#FFF',
    padding: '6em',
    lineHeight: '1.5em'
}

const Contact = (props) => {
        return(
          <section id="contact">
            <div className="generic-center" style={style} >
                <h1>Contact</h1>
                <br />
                <p>Office Hours: 09:00 – 18:00 AEST</p>
                <br />
                <p>Office Number: 1300 CONDUIT (1300 266 3848)</p>
                <br />
                <p>Fax Number: 0390363096</p>
                <br />
                <p>Conduit Health Pty. Ltd. (ABN: 69 217 406 133)</p>
            </div>
          </section>
        )
}

export default Contact

