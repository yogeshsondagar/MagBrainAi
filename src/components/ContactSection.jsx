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
                <p>Support</p>
              </div>
              <h2>Need Help? We’re Here for You.</h2>
              <p>
                Whether you're setting up your AI agent, integrating your API, or exploring analytics — our support team and resources are ready to guide you. <br />
                MagBrain AI is built for ease, but we’re just a click away if you need us.
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