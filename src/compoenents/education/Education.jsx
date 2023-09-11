import React from 'react'
import './Education.css'
import me from '../../Images/me1.png'

export const Education = () => {
  return (
    <section id='education' className='ed-block max-width'>
        <div className="about-me-section-1">
            <div className="about-me-left-section">
                <div className="about-me-img-wrapper">
                <img src={me} alt="me" className='about-me-img'/>
                </div>
            </div>
            <div className="about-me-right-section">
                <div className="about-me-right-section-wrapper">
                    <div className="right-experience-title title-anime">About me</div>
                    <div className="about-me-right-2">
                        <div>I am a highly motivated and results-driven 
                    Java developer with a strong passion for technology 
                    and innovation. With skills in Java development, particularly in Spring Boot, 
                    ReactJS, and have consistently delivered high-quality solutions to 
                    complex problems.</div>
                    <br></br>
                    <div>My journey in software development has been marked by a 
                    relentless pursuit of excellence. I thrive on challenges 
                    and take pride in my ability to adapt to new technologies 
                    and frameworks swiftly. </div>
                    <br></br>
                    <div>I understand 
                    that software development is not just about writing lines of 
                    code; it's about creating solutions that address real-world 
                    needs. I approach every project with a solution-oriented 
                    mindset, striving to exceed expectations and deliver value 
                    to end-users.</div>
                    </div>
                    <div className="about-me-right-3">
                        <a href="#contact">Let's talk</a>
                    </div>
                    <div className="about-me-right-4"></div>
                </div>
            </div>
        </div>
        <div className="about-me-section-2">
            
        </div>
        <div className="about-me-section-3"></div>
    </section>
  )
}

/**<div className='block row-block-1'>
<div className='row-title'>JAVA DEVELOPMENT
    <i></i>
</div>
<div className='row-content'>
    <ul className='row-list'>
        <li>Developed a strong foundation in Core Java programming,
                mastering key concepts and best practices.</li>
        <li>Successfully applied Java skills in real-world projects, 
            contributing to the development of "BLOG" application.</li>
        <li>Gained hands-on experience in debugging and troubleshooting 
            Java applications, ensuring optimal performance.</li>
    </ul> 
    </div>
    </div>
    <div className='block row-block-2'>
        <div className='row-title'>FULL STACK DEVELOPER
            <i></i>
        </div>
        <div className='row-content'>
            <ul className='row-list'>
                <li>Utilized Spring Boot framework to build robust 
                    and scalable web applications for clients..</li>
                <li>Developed RESTful APIs for seamless data exchange 
                    between frontend and backend systems.</li>
                <li>Led the development of a Blog Application, integrating 
                    Spring Boot with ReactJS for an interactive user experience.</li>
                <li>Implemented JWT Authentication to ensure 
                    secure user login and data protection.</li>
            </ul>
        </div>
    </div>
    <div className='block row-block-3'>
        <div className='row-title'>REACTJS FRONTEND DEVELOPER
            <i></i>
        </div>
        <div className='row-content'>
            <ul className='row-list'>
                <li>Demonstrated proficiency in creating dynamic 
                    and responsive user interfaces using ReactJS.</li>
                <li>Translated wireframes into functional, pixel-perfect web pages.</li>
                <li>Utilized React Hooks and Context API for state management, resulting in 
                    optimized performance and code maintainability.</li>
                <li>Integrated both backend and frontend 
                    components with Spring Boot RESTful APIs.</li>
            </ul>
        </div>
    </div> 
                            */



    /* <img className='experience-img' src={bag} alt='bag-img' />
                <span>Scroll Up</span>
                <div className="study-history-line max-width"></div>
                    <div className="study-history-vertical-line-wrapper">
                    <div className="study-history-line-vertical"></div>
                    <div className="study-history-line-vertical"></div>
                    <div className="study-history-line-vertical"></div>
                    <div className="study-history-line-vertical"></div>
                    <div className="study-history-line-vertical"></div>
                </div>
                <div className='box-container'>
                {
                    eduData && eduData.map((data, index) => {
                    return( 
                        <div key={index} className='box'>
                            <div className='box-wrapper'>
                                <div className='school'>
                                    <img src={data.coverImg} alt="school" />
                                    {data.title}</div>
                                <div className='content'>
                                    <span>{data.name}</span> 
                                </div>
                                <div className='year'>{data.passedOutYear}</div>
                            </div>
                        </div>
                        )
                    })
                }
                </div> */
                        
