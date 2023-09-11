import React from 'react'
import './Projects.css'
import { ProjectData } from './projectInfo'

const projectData = ProjectData;

export const Projects = () => {
  return (
    <section id='projects' className='pjt-block max-width'>
      <div className="pjts-wrapper">
        <div className="pjts-heading-title title-anime abs-ctr">
          <div className="pjts-title title-anime">My Expertise</div>
        </div>
        <div className="pjts-sub-heading">Skills I have</div>
        <div className="pjts-section-wrapper-1">
          <div className="expertise-section cur-po">
            <div className="my-expertise-title"> <>FrontEnd Development</></div>
            <div className="my-expertise-body cur-po">
              <div className="my-expertise-left-section">
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-react' ></i>
                    ReactJS</div>
                  <span className="how-much">Intermediate</span>
                </div>
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-html5' ></i>
                    HTML</div>
                  <span className="how-much">Intermediate</span>
                </div>
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-css3' ></i>
                    CSS</div>
                  <span className="how-much">Intermediate</span>
                </div>
              </div>
              <div className="my-expertise-right-section">
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-tailwind-css' ></i>
                    Tailwind CSS</div>
                  <span className="how-much">Basic</span>
                </div>
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-javascript' ></i>
                    JavaScript</div>
                  <span className="how-much">Basic</span>
                </div>
              </div>
            </div>
          </div>
          <div className="expertise-section cur-po">
            <div className="my-expertise-title">BackEnd Development</div>
            <div className="my-expertise-body">
              <div className="my-expertise-left-section">
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-java'></i>
                    Java Core</div>
                  <span className="how-much">Intermediate</span>
                </div>
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-spring-boot' ></i>
                    Spring Boot
                  </div>
                  <span className="how-much">Intermediate</span>
                </div>
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxl-postgresql' ></i>
                    MySQL</div>
                  <span className="how-much">Intermediate</span>
                </div>
              </div>
              <div className="my-expertise-right-section">
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bxs-server' ></i>
                    JSP Servlet</div>
                  <span className="how-much">Basic</span>
                </div>
                <div className="my-expertise">
                  <div className="main-skill">
                    <i className='bx bx-git-pull-request' ></i>
                    CS Fundamentals</div>
                  <span className="how-much">(DSA , OOPS , CN , OS)</span>
                  <span className="how-much">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pjts-section-wrapper-2">
          <div className="projects-wrapper">
            <div className="projects-heading abs-ctr">
                <span className="projects-title title-anime">My Projects</span>
            </div>
            <span className="projects-subtitle">My Projects & Profiles</span>
            <div className="projects-body">
              {
                projectData && projectData.map((data, index) => {
                  return (
                    <div key={index} className="project-card">
                      <div className="project-card-img-wrapper">
                        <img src={data.coverImg} alt={data.title} className="project-card-img" />
                      </div>
                      <div className="project-card-title">
                        {data.title}
                      </div>
                      <div className="project-card-description">
                        {data.description}
                      </div>
                      <div className="project-card-buttons">
                        <div className="project-card-button">
                          <a href={data.go_live}>Check out</a>
                        </div>
                        <div className="project-card-button">
                          <a href={data.source_code}>Source code</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
