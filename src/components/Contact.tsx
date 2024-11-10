import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id ='contact'className="contact-section">
        <div className="contact-grid md:grid-cols-2 ">
            <div className="contact-space">
                <h2 className="contact-heading" data-aos="zoom-in-up">
                  Reach out anytime.</h2>
                <p 
                className="contact-text" data-aos="zoom-in-up">
                    Reach out to me through my contact form or by phone/email.
                </p>

                <div className="contact-flex" data-aos="zoom-in-up">
                < HiOutlineMail  size={30} /> ahzamismail17@gmail.com</div>


                <div className= "contact-flex"data-aos="zoom-in-up">
                < FaPhoneAlt size={30} /> 03003512242</div>

               
                <div className="contact-flex" data-aos="zoom-in-up">
                       <IoLogoGithub size={30} />
                       <a href="https://github.com/AhzamIsmail" target="_blank" rel="noopener noreferrer">
                https://github.com/AhzamIsmail </a> </div>
    
                
                <div className="contact-flex" data-aos="zoom-in-up">
                     <FaLinkedin size={30} />
                     <a href="https://www.linkedin.com/in/ahzam-ismail-a121b1302/?originalSubdomain=pk" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/ahzam-ismail-a121b1302/?originalSubdomain=pk </a>
               </div>
       </div>

             <div className="contact-space">
                <div className="form"data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text"
                    className="input-field"
                    id='name'/>
             </div>

             <div className="form"data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className="input-field"
                    id='email' />
             </div>

             <div className="form"data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className="textarea-field"
                    id='msg'  rows={8}>
                    </textarea>
             </div>

             <button className="button"data-aos="zoom-in-up">
              Send
              </button>
             </div>
        </div>
    </div>
  )
}

export default Contact;
