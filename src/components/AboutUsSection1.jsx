import React from "react";

function AboutUsSection1({ containerClass = "", contentTitle, subTitle, showButton = true }) {
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
              <h2>{contentTitle || "Train It. Deploy It. Let AI Speak for You."}</h2>
              <p>
                MagBrain AI helps businesses create their own custom-trained AI agents that can instantly answer customer questions, automate routine support, 
                and provide insights that drive growth. No coding required — just plug in your content, and watch your AI agent go to work.
              </p>
              <ul>
                <li><i className="bx bx-check"></i>  Custom Training on Your Data</li>
                <li><i className="bx bx-check"></i> Client-Specific API for Deployment</li>
                <li><i className="bx bx-check"></i> Analytics That Power Strategy</li>
              </ul>
                {showButton && (
                  <a className="default-btn" href={"/about"}>
                    <span>{"About Us"}</span> <i className="bx bx-chevron-right"></i>
                  </a>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection1;
