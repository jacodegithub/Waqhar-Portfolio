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
                        <br />
                        <div className='previous-experience-desc'>
                        <div>During my 3-year tenure at Jindal Steel Works (JSW), I served as an Assistant 
                            Backend Developer, contributing to ERP model 
                            project. In this role, I played a key part in enhancing 
                            backend systems and ensuring their optimal performance.
                        </div>
                        <br />
                        <div>During my initial year at JSW, I played a crucial role as an HR Assistant in managing the company's response to the COVID crisis. My responsibilities included overseeing employee well-being, addressing concerns related to the pandemic, and managing the onboarding and offboarding processes. </div>
                        <br></br>
                        <div>
                        Subsequently, I transitioned into the role of Assistant Backend developer, where I focused on development of an ERP model project, ensuring seamless integration and efficient 
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
