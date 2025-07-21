import React from "react";
import FooterColumn from "./FooterColumn";
import {
  quickLinks,
  resourceLinks,
  footerBottomLinks,
} from "./utils/footerLinks";

function Footer() {
  return (
    <div className="footer-area">
      <div className="footer-widget-info ptb-100">
        <div className="container">
          <div className="row">
            {/* Subscribe Section */}
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="subscribe-area">
                <h2>Subscribe To Ai!</h2>
                <p>
                  Artificial Intelligence is a transformation field of computer
                  science that empowers machines to perform
                </p>
                <div className="subscribe-wrapper">
                  <div className="subscribe-box">
                    <form data-toggle="validator">
                      <div className="row align-items-center">
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your email address @"
                            name="EMAIL"
                            required
                            autoComplete="off"
                          />
                        </div>
                        <div className="col-lg-4">
                          <button type="submit" className="btn">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Reused with FooterColumn */}
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn title="Resource" links={resourceLinks} />

            {/* Office column stays unique */}
            <div className="col-lg-2 col-sm-6 col-md-4">
              <div className="footer-widget">
                <h4>Office</h4>
                <span>175 5th Ave, New York, NY 10010, USA</span>
                <a className="ft-mail" href="mailto:info@magbrainai.com">
                  info@magbrainai.com
                </a>
                <a className="ft-number" href="tel:+18408412569">
                  +1 840 841 25 69
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="copy-right-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="cpr-left">
                <p>Copyright© {new Date().getFullYear()} MagbrainAi. All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="cpr-right">
                <ul>
                  {footerBottomLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
