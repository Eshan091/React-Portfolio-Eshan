import React,{useEffect} from 'react';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp,BsFillArrowUpCircleFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(() => {
    AOS.init({duration:2000})
}, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    console.log("Attempting to send email...");
  
    emailjs
      .sendForm('service_1bvj2xp', 'template_qgrfiq4', form.current, 'K6qlCl3M5TNekPBhE')
      .then((result) => {
        console.log("Email sent successfully:", result);
        alert('Thank you for reaching out to me,I will get back to you soon !  😊');
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options" data-aos="fade-right">
           <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
             <h4>Email</h4>
             <h5>eshan.srivastava24@gmail.com</h5>
             <a href="mailto:eshan.srivastava24@gmail.com" target="_blank" rel="noreferrer" >Send a message</a>
           </article>
           <article className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
             <h4>Whatsapp</h4>
             <h4>8303519366</h4>
             <a href="https://api.whatsapp.com/send?phone=918303519366" target='_blank' rel='noreferrer' >Send a message</a>           </article>
        </div>

        <form ref={form} onSubmit={sendEmail} data-aos="fade-down" >
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
           <textarea name="message" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
         <a href="#header" className="scroll_up">
            <BsFillArrowUpCircleFill />
          </a>
      </div>
    </section>
  )
}

export default Contact
