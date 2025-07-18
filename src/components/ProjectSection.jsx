import React from 'react'
import projectData from "./utils/projectData";
function ProjectSection() {
  return (
<div className="project-area pt-100">
      <div className="container">
        <div className="row">
          {projectData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" data-aos="fade-up" key={item.id}>
              <div className="project-img">
                <img src={item.img} alt={`Project ${index + 1}`} />
                <div className="project-btn">
                  <a href={item.link}>
                    <i className="bx bx-arrow-back bx-rotate-180"></i>{" "}
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSection