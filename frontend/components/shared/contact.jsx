import React, { PropTypes } from 'react'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <img src='https://res.cloudinary.com/dsetpdsls/image/upload/c_fit,w_280/v1486959067/sonik_xtcmh1.png'></img>
      <div className="contact-desc">
        <h1>Sonik Jhang</h1>
        <p>I am a passionate software engineer who loves to build apps in my free time.</p>
        <ul className="contact-links">
          <li className="tooltip">
            <a href="tel:+15128502709"><i className="fa fa-mobile fa-1x" aria-hidden="true"></i></a>
            <span className="tooltiptext">Phone</span>
          </li>
          <li className="tooltip"><a href="mailto:sonik4595@gmail.com"><i className="fa fa-envelope fa-1x" aria-hidden="true"></i></a><span className="tooltiptext">Email</span></li>
          <li className="tooltip"><a href="http://www.sonikjhang.com" target="_blank"><i className="fa fa-address-card fa-1x" aria-hidden="true"></i></a><span className="tooltiptext">Portfolio</span></li>
          <li className="tooltip"><a href="https://www.github.com/sjhang" target="_blank"><i className="fa fa-github fa-1x" aria-hidden="true"></i></a><span className="tooltiptext">Github</span></li>
          <li className="tooltip"><a href="https://www.linkedin.com/in/sonik-jhang" target="_blank"><i className="fa fa-linkedin-square fa-1x" aria-hidden="true"></i></a><span className="tooltiptext">LinkedIn</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact;
