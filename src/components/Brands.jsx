import React from 'react'
import brandLogos from './utils/BrandLogos'
function Brands() {
  return (
    <div>
<div className="brand-section-2 pb-100">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      {brandLogos.map((logo, idx) => (
        <div
          key={idx}
          className="col-xl-2 col-lg-2 col-md-4 col-6"
          data-aos="fade-zoom-in"
          data-aos-delay={logo.delay}
        >
          <div className="single-brand">
            <img src={logo.src} alt="brand" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
  )
}

export default Brands