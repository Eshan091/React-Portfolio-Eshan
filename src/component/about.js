import React,{useEffect} from "react";
import imgg from "../assets/me2.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaBookReader  } from "react-icons/fa";

import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    AOS.init({duration:2000})
}, [])
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 >About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image" >
            <img src={imgg} alt="my "  />
          </div>
        </div>
        <div className="about_content">
          <div className="about_card" data-aos="fade-down">
          <article className="about_cards">
              <FaGraduationCap className="about_icon" />
              <h5>B-tech CGPA</h5>
              <small>7.62/10</small>
            </article>
            <article className="about_cards">
              <BsPersonWorkspace className="about_icon" />
              <h5>Total Projects</h5>
              <small>5+</small>
            </article>
            <article className="about_cards">
              <FaBookReader className="about_icon" />
              <h5>Tech Stack Worked On</h5>
              <small>ReactJs/HTML/CSS/Javascript/Flutter</small>
            </article>
          </div>
          <p data-aos="fade-right"> I am Eshan Srivastava , Completed B-tech from <a href="https://www.itmgkp.edu.in/" target="_blank" rel="noreferrer"  className="college_name">Institute of technology and management , Gida Gorakhpur.</a>  As a dedicated and ambitious fresher, I am excited to embark on my journey as a Software Development Engineer (SDE) and contribute my skills and enthusiasm to the Company. Armed with a solid educational background in computer science and a passion for problem-solving, I am eager to apply my knowledge and leverage my fresh perspective to drive innovation within the company</p>
          <a href="#contact" className="btn btn-primary ">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
