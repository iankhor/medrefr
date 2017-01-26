import React from 'react'

const style = {
    margin: 0,
    // backgroundColor: '#FFF',
    padding: '6em',
    lineHeight: '1.5em',
    textAlign: 'center'
}

const AboutPage = (props) => {
  return(
    <div className="generic-center" style={style}>
        <h1>About</h1>
        <br />
        <p><strong>MedReFR</strong> is a Telepsychiatry and Telehealth service founded in 2014.</p>
        <br />
        <p><strong>MedReFR</strong> aims to deliver specialist health care in an effective,
          convenient and readily accessible way for the general population,
          whilst providing additional support for primary care physicians. </p>
        <br />
        <p>Due to the significant demand for mental health services and having to wait
          long hours for consultations with specialists, Conduit Health is a preferred
          choice for patients. </p>
        <br />
        <p>Combining the availability of information technology and professional health care,
          we are able to provide better access to specialist services, especially to those living in rural areas.
          With Conduit Health consults, there is no travel time, and the consults can happen in the comfort of one's home.</p>
        <br />
        <p>As mental health still carries much stigma, having the ability to consult in the comfort of one's own home or anywhere on-the-go means greater privacy and ease for patients. Additionally, recent research shows an increase in rates of assaults to mental health care providers, so increased safety for practitioners is paramount. It also serves for better continuity and consistent quality of care for patients.
        Conduit Health does not record any teleconferencing sessions, and ensures confidentiality for clients.</p>
    </div>
  )
}

export default AboutPage

