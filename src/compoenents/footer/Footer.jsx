import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <section>
        <footer className='max-width'>
            <div className="footer-top" style={{width: "60%"}}>
              <div className="page-links cur-po">
                <a href='#intro' className="links">Home</a>
                <a href='#education' className="links">About me</a>
                <a href='#experience' className="links">Experience</a>
                <a href='#projects' className="links">Projects</a>
                <a href='#contact' className="links">Contacts</a>
              </div>
            </div>
            <div className="footer-middle" style={{width: "20%"}}>
              <div className="social-media-links cur-po">
                <div className="social-media">
                  <i className='bx bxs-envelope' ></i>
                  </div>
                <div className="social-media">
                  <i className='bx bxl-whatsapp-square' ></i>
                  </div>
                <div className="social-media">
                  <i className='bx bxl-linkedin-square' ></i>
                  </div>
              </div>
            </div>
            <div className="footer-bottom cur-po">
              <div className="my-name">WAQHAR HUSSAIN</div>
            </div>
        </footer>
    </section>
  )
}
