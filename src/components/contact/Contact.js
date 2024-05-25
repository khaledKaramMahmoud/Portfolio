import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {FaFacebookMessenger} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_uqs2d49', 'template_v6swh4p', form.current, 'RT-ftCf8EHcQRdnxn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact-container">
        <div>
            <div className="contact-option">
                <AiOutlineMail/>
                <h4>Email</h4>
                <h5>khaledkaram880@gmail.com</h5>
                <a href="mailto:khaledkaram880@gmail.com" target="_blank">Send a message</a>
            </div>
            <div className="contact-option">
                <FaFacebookMessenger/>
                <h4>Messanger</h4>
                <h5>Khaled Karam</h5>
                <a href="https://m.me/.profile.php?id=100006004936837" target="_blank">Send a message</a>
            </div>
            <div className="contact-option">
                <FaWhatsapp/>
                <h4>Whatsapp</h4>
                <h5>Khaled Karam</h5>
                <a href="https://api.whatsapp.com/send?phone=201123838278" target="_blank">Send a message</a>
            </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' required placeholder='name' />
            <input type="email" name='email' required placeholder='email' />
            <textarea name="message" rows="7" required placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send</button>
        </form> 
      </div>
    </section>
  )
}

export default Contact
