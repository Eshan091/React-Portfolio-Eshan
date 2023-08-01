import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HEADER_SOCILAS from "./Header_socilas";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from "react-simple-typewriter";
const Header = () => {
  
    useEffect(() => {
        AOS.init({duration:3000})
    }, []);
    
  return (
    <header id="header">
        
        <div className="container header_container">
          <h3 data-aos="fade-down">Hello I'm</h3>
          <h1 data-aos="zoom-in">Eshan Srivastava</h1>
          <h2 className="text-light" data-aos="zoom-in">
          <Typewriter
            words={['Software Developer', 'ReactJs Developer', 'Backend Developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
            </h2>

          <CTA />
          <HEADER_SOCILAS />
          {/* <div className="header_img">
            <img src={img} alt="" />
          </div> */}
          {/* <div className="me">
            <img src={imgg} alt="" />
          </div> */}
          <a href="#contact" className="scroll_down">
            <BsFillArrowDownCircleFill />
          </a>
        </div>
     
    </header>
  );
};

export default Header;
