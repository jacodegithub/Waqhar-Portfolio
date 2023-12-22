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
                <div className="experience-section-2">
                <div className="experience-section-1">
                    <div className="experience-section-img-wrapper">
                        <img src={at_jindal} alt="at_jindal" className="experience-section-img" />
                    </div>
                </div>
                    <div className="previous-experience-detail">
                        <div className='previous-experience'>Previous Experience:</div>
                        <div className='previous-experience-post'>Assistant Manager | Jindal Steel Works (JSW) | [Dec 2019 - Dec 2022]</div>
                        
                        <div className='previous-experience-desc'>
                        <div>During my 3-year tenure at Jindal Steel Works (JSW), I served as an Assistant 
                            Backend Developer, contributing to ERP model 
                            project. In this role, I played a key part in enhancing 
                            backend systems and ensuring their optimal performance.
                        </div>
                        <br></br>
                        <div>During my initial year at JSW, I played a crucial role as an HR Assistant in managing the company's response to the COVID crisis. My responsibilities included overseeing employee well-being, addressing concerns related to the pandemic, and managing the onboarding and offboarding processes. Subsequently, I transitioned into the role of Assistant Manager, where I focused on maintaining seamless production operations and machinery efficiency. Leading a team of ten, I successfully minimized operational downtime and efficiently addressed machinery issues, further enhancing my technical skills and leadership abilities during my overall three-year tenure.</div>
                        <br></br>
                        <div>Contributed to the development of an ERP model 
                            project, ensuring seamless integration and efficient 
                            data management within the system. 
                            Spearheaded the design and implementation of a 
                            robust stock management application, enhancing
                            inventory control and optimizing operations.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience-bottom">
                <a href="#projects">
                    <h2>
                        Get a look @ my projects..
                    </h2>                       
                </a>
            </div>
        </div>
    </section>
  )
}
