import React from 'react'
import features from './utils/FeatureData'
function Features() {
  return (
    <div className="features-section-2 pt-100 pb-70">
      <div className="container">
        <div className="row">
          {features.map((feature) => (
            <div className="col-xl-3 col-lg-6 col-sm-6" key={feature.title}>
              <div className="feature-box" data-aos="fade-up" data-aos-delay={feature.delay}>
                <span>Ai Features</span>
                <div className="icon">
                  <i className={feature.iconClass}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features