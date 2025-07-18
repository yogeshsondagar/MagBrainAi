import React from 'react'
import testimonialData from './utils/testimonialData'
function Testimonial() {
  return (
   <div className="testimonial-section-2 pt-100 pb-70">
      <div className="container">
        <div className="testimonial-content-2 owl-carousel owl-theme">
          {testimonialData.map((item) => (
            <div
              className="testimonial-item-2"
              data-aos="fade-up"
              data-aos-offset={item.aosDelay}
              key={item.id}
            >
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <p>{item.message}</p>
                    <div className="info">
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="image">
                    <div className="quate-icon">
                      <i className="bx bxs-quote-left"></i>
                    </div>
                    <img src={item.image} alt={`${item.name} testimonial`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial