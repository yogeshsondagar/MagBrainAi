import React from "react";
import teamMembers from "./utils/teamMembers";

function MyTeam() {
  return (
    <div className="team-section pb-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-md-6 col-lg-12">
            <div className="team-content" data-aos="fade-up" data-aos-delay="100">
              <div className="sub-title-2">
                <p>Our Developers</p>
              </div>
              <h2>Meet our team of Creative Expert.</h2>
              <p>
                AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time.
              </p>
            </div>
          </div>

          <div className="col-xl-7 col-md-6 col-lg-12">
            <div className="team-card owl-carousel owl-theme" data-aos="fade-zoom-in" data-aos-delay="200">
              {teamMembers.map((member, idx) => (
                <div className="single-team" key={idx}>
                  <img src={member.image} alt="Team Members" />
                  <div className="team-text">
                    <div className="team-title">
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                    </div>
                    <p>{member.description}</p>
                    <div className="team-social">
                      {member.socials.map((social, sIdx) => (
                        <a href={social.link} target="_blank" rel="noreferrer" key={sIdx}>
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyTeam;
