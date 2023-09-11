import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const mailRef = useRef()

  const [mail, setMail] = useState(false)

  useEffect(() => {
    if(mail) {
      const time = setTimeout(() => {
        setMail(false)
      }, 3000)

      return () => clearTimeout(time)
    }
  }, [mail])

  const handleSubmit = (event) => {

    event.preventDefault()
    setMail(true)

    emailjs.sendForm('service_6rkt98u', 'template_x8gnz1p', mailRef.current, 'ZbVrc6EtMlrchNktV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
  }

  return (
    <section id='contact' className='contact'>
        <div className='cntBox-1'>
          <div className='message'>Mail me to Contact ..</div>
        </div>
        <div className='cntBox-2'>
            <form className='contact-form' ref={mailRef}>
              <input type='name' placeholder='Your Name' name='user_name'></input>
              <input type='text' placeholder='Subject' name='user_subject'></input>
              <input type='email' placeholder='Your Email' name='user_email'></input>
              <textarea rows={7} placeholder='tiki tik...' name='message'></textarea>

              <button className='cnt-btn' onClick={handleSubmit}>SEND</button>
              {
                mail && <span className='reply'>Thanks, I will reply ASAP. :) </span>
              }
            </form>
        </div>
    </section>
  )
}
