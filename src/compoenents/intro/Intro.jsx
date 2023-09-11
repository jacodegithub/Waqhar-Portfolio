import React from 'react'
import './Intro.css'
import me1 from '../../Images/on-mountains.png'
import { TypeAnimation } from 'react-type-animation';
// import resume from '../../Images/my-resume.pdf'

export const Intro = () => {

    const handleDownload = () => {
        const fileUrl = '/WAQHAR HUSSAIN.pdf'
        const fileName = 'WAQHAR HUSSAIN.pdf'

        const downloadLink = document.createElement('a')

        downloadLink.href = fileUrl
        downloadLink.download = fileName

        document.body.append(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

  return (
    <section id='intro' className='intro-section max-width'>
        <div className='left'>
            <div className='left-wrapper'>
                <h3 className='left-intro'>Hi, My name is</h3>
                <h1 className='left-name'>Waqhar Hussain</h1>
                <div className='left-title'> 
                    {/* <div className='left-title-wrapper'>
                        <div className='left-title-item'>BackEnd Developer</div>
                        <div className='left-title-item'>FrontEnd Developer</div>
                    </div> */}
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                        500,
                        'I am a FrontEnd Developer.', // initially rendered starting point
                        1000,
                        'I am a BackEnd Developer.',
                        1000,
                        'And I love programming..',
                        1000
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>
                {/* <div className='left-title-desc'>
                    Full-stack Web Developer with a passion for 
                    creating cutting-edge web applications.
                    Proficiency in the latest web development 
                    technologies allows me to design and deploy 
                    innovative web solutions that cater to diverse
                    user needs.
                </div> */}
                <button className='intro-btn' onClick={handleDownload}>Download CV</button>
            </div>
        </div>
        <div className='right'>
            <div className='right-wrapper'>
                <div className='clip-polygon'></div>
                <div className="image-wrapper">
                    <img className='right-img' src={me1} alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}
