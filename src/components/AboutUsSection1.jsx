import React from "react";

function AboutUsSection1({ containerClass = "", contentTitle, subTitle, buttonLink, buttonText }) {
  return (
    <div className={`about-section ptb-100 ${containerClass}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="img-wrapper" data-aos="fade-zoom-in" data-aos-delay="100">
              <div className="img-box">
                <img className="image-box-item" src="assets/img/all-img/about-1.png" alt="about-1" />
                <img className="image-box-item" src="assets/img/all-img/about-3.png" alt="about-3" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="about-content" data-aos="fade-up" data-aos-delay="200">
              <div className="sub-title-2">
                <p>{subTitle || "What MagbrainAi Do"}</p>
              </div>
              <h2>{contentTitle || "Create your own AI business easily."}</h2>
              <p>
                AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve
                over time. Whether it's speech recognition, image processing, or problem solving.
              </p>
              <ul>
                <li><i className="bx bx-check"></i> Natural Language Processing</li>
                <li><i className="bx bx-check"></i> AI refers to the simulation of human</li>
                <li><i className="bx bx-check"></i> Generating art, music, and literature.</li>
              </ul>
              <a className="default-btn" href={buttonLink || "about.html"}>
                <span>{buttonText || "About Us"}</span> <i className="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection1;
