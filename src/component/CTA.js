import React ,{useEffect}from 'react';
import CV from '../assets/CV.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CTA = () => {
  useEffect(() => {
    AOS.init({duration:4000})
}, [])
  return (
    <div className='cta'>
        <a href={CV} download className='btn' data-aos="fade-right">Download resume</a>
        <a href="#contact" className='btn btn-primary' data-aos="fade-left">Let's Talk</a>
      
    </div>
  )
}

export default CTA
