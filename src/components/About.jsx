import React from 'react'
import '../styles/About.css'
import { FaChevronRight } from "react-icons/fa6";
import anim2 from '../images/anim2.json'
import Lottie from "lottie-react";
function About() {
  return (
    <section id="about">

    <div className='about_main'  >
        <h1>About</h1>
        <div className='about_con'>
        <div className='about_div1'>
            <h2>Full Stack developer</h2>
            <p>I'm  a Full Stack Developer with experience in designing and developing scalable web applications. Over the past 8 months, I have worked extensively with the MERN stack (MongoDB, Express.js, ReactJS, Node.js), creating efficient and responsive user interfaces and robust backend systems. My key skills include JavaScript, RESTful APIs, database management, and deployment. I approach development with attention to detail and a focus on clean, maintainable code. I enjoy collaborating with teams, adapting to challenges, and delivering solutions that meet both technical and user needs."</p>
            <div className='about_div11'>
                <div> <span className='right_arr'><FaChevronRight /></span> Birthday:22 July 2002</div>
                <div>  <span className='right_arr'><FaChevronRight /></span>Phone:+91 6382688488</div>
                <div> <span className='right_arr'><FaChevronRight /></span> City:Pondicherry, India</div>
                <div> <span className='right_arr'><FaChevronRight /></span> Age:22</div>
                <div> <span className='right_arr'><FaChevronRight /></span> Degree:B.Tech</div>
                <div><span className='right_arr'><FaChevronRight /></span> Email:premkumarananthan1@gmail.com</div>
            </div>
        </div>
        <div className='about_div12'>
            <Lottie className='lottie'
        animationData={anim2}   
        loop={true} // Set to false if you don't want it to loop
      />
            </div>
        </div>
    </div>
    </section>
  )
}

export default About