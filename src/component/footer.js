import React,{useEffect} from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './footer.css'
const Footer = () => {
  useEffect(() => {
    AOS.init({duration:3000})
}, [])
  return (
    <footer id='footer'>
      <a href="/" className='footer_logo' data-aos="fade-down">Eshan Srivastava</a>
      <ul className='permalinks' data-aos="zoom-in" >
          <li><a href="#header">Home</a></li>
          <li><a href="#about">about</a></li>
          
          <li><a href="#experince">experience</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#contact">contact</a></li>
      </ul>
      <div className="footer_socials" data-aos="zoom-in" >
        <a href="https://www.linkedin.com/in/eshan-srivastava-485076244/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Eshan091?tab=repositories" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://facebook.com" target='_blank' rel="noreferrer"><BsFacebook/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy;Eshan srivastava.All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
