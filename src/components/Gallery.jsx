// This jsx file is not used in the project, but it is a part of the codebase.

import React from 'react'
import galleryImages from './utils/galleryImages';
function Gallery() {
  return (
    <div className="gallery-section pb-100">
      <div className="container">
        <div className="section-title-2" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title-2">
            <p>Magbrain Creation</p>
          </div>
          <h2>Unveil New Creative Horizons with Models</h2>
        </div>

        {/* Filter Controls */}
        <div className="controls" data-aos="fade-zoom-in" data-aos-offset="200">
          <ul id="filters" className="clearfix">
            <li className="filter active" data-filter="all">All</li>
            <li className="filter" data-filter=".creative">Creative</li>
            <li className="filter" data-filter=".animate">Animate</li>
            <li className="filter" data-filter=".design">Design</li>
          </ul>
        </div>

        {/* Filter Grid */}
        <div className="item-grid">
          {galleryImages.map((item, index) => (
            <div className={`item ${item.category}`} data-cat={item.category} key={index}>
              <a href={item.src} className="popup-btn">
                <img src={item.src} alt={`Gallery item ${index + 1}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery