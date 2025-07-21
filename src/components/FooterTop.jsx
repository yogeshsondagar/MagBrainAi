import React from 'react'

function FooterTop() {
  return (
    <div className='footer-area'>
        <div className="footer-top-info">
                <div className="container-fluid">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6">
                            <div className="footer-image">
                                <a className="popup-youtube" href="https://youtu.be/VDVHbd3nNrM?si=atnpL-PwDDJ8DX6h">
                                    <img src="/assets/img/all-img/image-1.jpg" alt="aksdlf"/>
                                </a>
                                <span id="tooltip">play</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content ft-shape">
                                <div className="logo">
                                    <h2>MeetAIsadf</h2>
                                </div>
                                <p>MagbrainAi is is poised to revolutionize the way we live and work, offering unprecedented possibilities for innovation and efficiency.</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="bx bxl-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="bx bxl-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className='bx bxl-twitter'></i></a></li>
                                    <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin-square'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FooterTop