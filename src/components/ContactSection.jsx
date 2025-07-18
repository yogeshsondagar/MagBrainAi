import React from 'react'
import contactInfo from './utils/contactInfo';
function ContactSection() {
  return (
<div className="contact-section-title ptb-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side content */}
          <div className="col-lg-6">
            <div className="contact-content">
              <div className="sub-title-2">
                <p>Contact Us</p>
              </div>
              <h2>Let’s Start Working Together. Get in Touch</h2>
              <p>
                Get in touch to discuss your employee wellbeing needs today.
                Please give us a call, drop us an email.
              </p>
            </div>
          </div>

          {/* Right side contact info */}
          <div className="col-lg-6">
            <div className="contact-info">
              <div className="row">
                {contactInfo.map((info, index) => (
                  <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                    <div className="contact-info-box">
                      <i className={info.icon}></i>
                      <h4>
                        <a href={info.link}>{info.text}</a>
                      </h4>
                      <span>{info.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactSection