import React,{useEffect} from "react";
import { BsPatchCheckFill  } from "react-icons/bs";
import './experince.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Experince = () => {
  useEffect(() => {
    AOS.init({duration:2000})
}, [])
  return (
    <section id="experince">
      <h5>what skill's i have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend" data-aos="fade-down">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>HTML</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>CSS</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend" data-aos="fade-down">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>MySql</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icons"  />
              <div>
                <h4>PHP</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experince;
