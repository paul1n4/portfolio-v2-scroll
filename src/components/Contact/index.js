import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faBehance, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {publicKey: process.env.REACT_APP_PUBLIC_KEY}
      )
      .then(
        () => {
          alert('Message successfully sent!')
          form.current.reset();
          //console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to send the message, please try again')
          //console.log('FAILED...', error.text);
        },
      )
  }
  return (
    <div className='container contact-page'>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <div className='contact-text'>
          <p>I'd love to hear from you! Whether you have a project in mind, a question about my work, or just want to connect. </p>
          <div className='contact-media-list'>
            <div className='contact-media'>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/paulinevalero/'>
                <span className='contact-media-svg'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                <span>/linkedin</span>
              </a>
            </div>
            <div className='contact-media'>
              <a target='_blank' rel='noreferrer' href='https://github.com/paul1n4'>
                <span className='contact-media-svg'>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <span>/github</span>
              </a>
            </div>
            <div className='contact-media'>
              <a target='_blank' rel='noreferrer' href='https://www.behance.net/paulinevalero'>
                <span className='contact-media-svg'>
                  <FontAwesomeIcon icon={faBehance} />
                </span>
                <span>/behance</span>
              </a>
            </div>
            
          </div>
        </div>
        
        <div className='form-container'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='half-input'>
              <input type='text' name='from_name' placeholder='Name' required/>
              <input type='email' name='email' placeholder='Email' required/>
            </div>
           
            <input type='text' name='subject' placeholder='Subject' required/>
            <textarea name='message' placeholder='Message' required></textarea>
            <div className='contact-submit'>
              <input type='submit'className='flat-button' value='SEND'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact