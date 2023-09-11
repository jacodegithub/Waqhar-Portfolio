import './Experience.css'
import at_jindal from '../../Images/at_jindal.jpg'

export const Experience = () => {

  return (
    <section id='experience' className='experience-section max-width'>
        
        <div className="experience-wrapper max-width">
            <div className="experience-section-title title-anime abs-ctr">
                <span>Experience</span>
            </div>
            <div className="experience-section-body">
                <div className="experience-section-1">
                    <div className="experience-section-img-wrapper">
                        <img src={at_jindal} alt="at_jindal" className="experience-section-img" />
                    </div>
                </div>
                <div className="experience-section-2">
                    <div className="previous-experience-detail">
                        <div className='previous-experience'>Previous Experience:</div>
                        <div className='previous-experience-post'>Assistant Manager | Jindal Steel Works (JSW) | [Dec 2019 - Dec 2022]</div>
                        
                        <div className='previous-experience-desc'>
                        <div>At Jindal Steel Works (JSW), India's largest steel manufacturing company, 
                        I held the position of Assistant Manager as a production and 
                        maintenance engineer. Over the course of my 3-year tenure.</div>
                        <br></br>
                        <div>During my three-year tenure at JSW as an Assistant Manager, 
                        I focused on maintaining smooth production operations and machinery. 
                        Leading a team of ten, I minimized operational downtime and efficiently 
                        addressed machinery issues. This experience enhanced my technical skills 
                        and leadership abilities.</div>
                        <br></br>
                        <div>Simultaneously, I managed contractor teams and played an active 
                        role in site management, including inspections, permits, and plant 
                        inductions. This multifaceted role sharpened my skills in teamwork, 
                        communication, and project management. My time at JSW provided me 
                        with a solid foundation in leadership and 
                        project management that I'm eager to apply in my future endeavors.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience-bottom">
                <a href="#projects">
                    <h2>
                        Don't judge me by my background, check out my projects..
                    </h2>                       
                </a>
            </div>
        </div>
    </section>
  )
}
