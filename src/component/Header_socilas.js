import React,{useEffect} from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
const HEADER_SOCILAS = () => {
  useEffect(() => {
    AOS.init({duration:3000})
}, [])
  return (
    <div className='header_socials' data-aos="fade-right">
      <a href="https://www.linkedin.com/in/eshan-srivastava-485076244/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Eshan091?tab=repositories" rel="noreferrer" target='_blank'><FaGithub/></a>
      <a href="https://facebook.com" rel="noreferrer" target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HEADER_SOCILAS
