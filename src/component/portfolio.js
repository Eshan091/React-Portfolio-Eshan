import React ,{useEffect}from 'react';
import './portfolio.css';
import img1 from '..//assets/flutter.jpeg';
import img3 from '..//assets/news.jpeg';
import img2 from '..//assets/netflix.jpeg';
import img4 from '..//assets/portfolio.jpeg';
import { Typewriter } from "react-simple-typewriter";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Portfolio = () => {
  useEffect(() => {
    AOS.init({duration:3000})
}, [])
  return (
    <section id='portfolio'>
     <h5>My Recent Works</h5>
     <h2>PortFolio</h2>
     <div className="container portfolio_container">
      <article className='portfolio_item' data-aos="fade-down">
         <div className="portfolio_item-image">
         <img src={img1}alt="" />
         </div>
         <h3>Digital HealthCare App <span style={{color:'blue',fontSize:'2rem'}}>🧑‍⚕️</span></h3>
         <p><Typewriter
            words={['  Developed "Digital Healthcare" Flutter app, empowering users   to effortlessly book doctor appointments and access information on dentists, hospitals, and ambulances in their vicinity']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={40}
            delaySpeed={4000}
           
          />
         </p>
          <a href="https://github.com/Eshan091/Digital-Healthcare"  target='_blank'  rel="noreferrer" className='btn btn-primary '>GitHub</a>
      </article>
      <article className='portfolio_item' data-aos="fade-down">
         <div className="portfolio_item-image">
         <img src={img4}alt="" />
         </div>
         <h3>Personal Portfolio  <span style={{color:'blue',fontSize:'2rem'}}>👨‍💻</span> </h3>
         <p><Typewriter
            words={[' My personal portfolio is a carefully crafted website built using React, serving as a digital showcase of my professional journey, passion projects, and experiences. Designed with a clean and modern interface, it offers visitors an immersive insight into my skills, accomplishments, and the unique experiences that have shaped my career.']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={40}
            delaySpeed={4000}
           
          />
          </p>
          <a href="https://github.com"  target='_blank'  rel="noreferrer" className='btn btn-primary '>GitHub</a>
      </article>
      <article className='portfolio_item' data-aos="fade-down">
         <div className="portfolio_item-image">
         <img src={img2}alt="" />
         </div>
         <h3>NetFlix Clone  <span style={{color:'blue',fontSize:'2rem'}}>🚀</span></h3>
         <p><Typewriter
            words={['Successfully developed a feature-rich Netflix Clone utilizing the IMDb API to fetch  and display the latest movie releases.  Leveraged Reacts state management and dynamic content rendering to create a seamless and up-to-date user experience. Passionate about using cutting-edge technologies to deliver captivating web applications']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={40}
            delaySpeed={4000}
           
          />
          </p>
          <a href="https://github.com/Eshan091/Netflix_clone"  target='_blank'  rel="noreferrer" className='btn btn-primary '>GitHub</a>
      </article>
      <article className='portfolio_item'data-aos="fade-down">
         <div className="portfolio_item-image">
         <img src={img3}alt="" />
         </div>
         <h3>Khabron-ki-Duniya <span style={{color:'blue',fontSize:'2rem'}}>📺</span></h3>
         <p><Typewriter
            words={['Khabron Ki Duniya is a personal project I undertook with the aim of creating a comprehensive news website using ReactJs.  To fetch news data, we have integrated an API into our application. This API serves as a reliable source of up-to-date news articles, ensuring that you receive the most recent information.']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={40}
            delaySpeed={4000}
           
          />
          </p>
          <a href="https://github.com/Eshan091/KhabronKiDuniya"  target='_blank'  rel="noreferrer" className='btn btn-primary'>GitHub</a>
      </article>
     </div>
    </section>
  )
}

export default Portfolio
