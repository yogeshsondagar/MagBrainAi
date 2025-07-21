import React from 'react'

function HeroSection() {
  return (
    <div><div className="hero-section-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content-2">
                            <div className="sub-title-2" data-aos="fade-zoom-in"
                            data-aos-duration="3000" data-aos-delay="400">
                                <p>Magbrain ChatAgent Generator</p>
                            </div>
                            <h2> 
                                <span className="black-text" data-aos="fade-up" data-aos-duration="1000" >Create beautiful art with</span> 
                                <span className="sub-head" data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200">Artificial Intelligence</span>
                            </h2>
                            <div className="image-generator-box"> 
                                    <div className="searchbox" data-aos="fade-zoom-in"
                                    data-aos-duration="1500">
                                        <div className="searchwrapper"> 
                                        <div className="row align-items-center"> 
                                            <div className="col-md-9">
                                                <form>
                                                    <input type="text" className="form-control" placeholder="Write your prompt and get you best ai artwork!"/>
                                                </form>
                                            </div> 
                                            <div className="col-lg-3"> 
                                                <form>
                                                    <button className="btn" type="submit">Generate</button>
                                                </form>
                                            </div> 
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className="short-prompt" data-aos="fade-zoom-in"
                            data-aos-duration="1000">
                                <ul>
                                    <li><p>Quick Try :</p></li>
                                    <li><a className="hover-bg" href="portfolio.html">Creative</a></li>
                                    <li><a href="portfolio.html">Sport</a></li>
                                    <li><a href="portfolio.html">Animation</a></li>
                                    <li><a href="portfolio.html">Fantasy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
  )
}

export default HeroSection