import React from 'react'

const contactFormFields = [
  {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Your name",
    error: "Please enter your name",
  },
  {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Your email address",
    error: "Please enter your email",
  },
  {
    type: "text",
    name: "phone_number",
    id: "phone_number",
    placeholder: "Your phone number",
    error: "Please enter your phone number",
  },
];

function ContactSectionForm() {
  return (
    <div className="contact-section pb-70">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6 col-md-6">
            <div className="contact-form">
              <form id="contactForm">
                <div className="row">
                  {contactFormFields.map((field, index) => (
                    <div className="col-lg-12 col-md-12" key={index}>
                      <div className="form-group">
                        <input
                          type={field.type}
                          name={field.name}
                          className="form-control"
                          id={field.id}
                          required
                          data-error={field.error}
                          placeholder={field.placeholder}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  ))}

                  {/* Message Field */}
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        cols="30"
                        rows="6"
                        required
                        data-error="Please enter your message"
                        placeholder="Write your message..."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      <span>Send Message</span>
                      <i className="bx bx-paper-plane"></i>
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Video */}
          <div className="col-lg-6 col-md-6">
            <div className="contact-wrap">
              <div className="contact-video-wrap">
                <video
                  className="contact-video"
                  src="/assets/img/all-img/video-4.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSectionForm