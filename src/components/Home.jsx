import React from 'react'
import blackback from '../images/blackback.png'
import '../styles/Home.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import anim from '../images/anim.json'
import Lottie from "lottie-react";
import { Link } from 'react-scroll';

function Home() {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/premkumar.pdf'; // Path to your PDF file
        link.download = 'My_Resume.pdf'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const redirectToSocial = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer'); // Opens in a new tab
      };

    return (
        <section id="home">

        <div className='home_main' style={{ backgroundImage: `url(${blackback})` }}>
            <div className='home_div1'>
            <h1>
  <span >
   Hi I'm PREMKUMAR
  </span>
</h1>
                <p>A highly motivated and result-oriented web developer specializing in designing, building, and managing dynamic websites and web applications. With a strong focus on delivering user-centric solutions, I strive to create innovative and efficient digital experiences that drive the success of products and projects. My expertise lies in transforming ideas into functional, scalable, and impactful web solutions that meet business goals and exceed client expectations.</p>
                <div className='home_div10'>
                    <div class="button-borders">
                        <button class="primary-button" onClick={downloadResume}>RESUME
                        </button> 
                       
                    </div>
                    <Link to="contact" smooth={true} duration={500}>
                    <div class="button-borders">
                        <button class="primary-button" style={{backgroundColor:"white",color:"black"}} >CONTACT
                        </button> 
                       
                    </div>
                    </Link>
                </div>
               <div className='home_div11_0'>
               <Link to="about" smooth={true} duration={500}>

               <div style={{cursor:"pointer"}} className='home_div11'>

                    <p>See more about Me </p>
                    <span><IoIosArrowRoundForward /></span>
                </div>
                </Link>

                <div className='home_div12'>
                <div onClick={() => redirectToSocial('https://www.linkedin.com/in/premkumar-ananthan')}>
        <ImLinkedin2 />
      </div>
      <div onClick={() => redirectToSocial('https://wa.me/+9163822688488')}>
        <FaWhatsapp />
      </div>
      <div onClick={() => redirectToSocial('mailto:premkumarananthan1@gmail.com')}>
        <IoMailOutline />
      </div>
      <div onClick={() => redirectToSocial('https://github.com/premkumar5519')}>
        <LuGithub />
      </div>

                </div>
               </div>
            </div>
            <div className='home_divmob'>
            <Lottie   className='lottie_main'
        animationData={anim}   
        loop={true} // Set to false if you don't want it to loop
      />
            </div>
        </div>
        </section>
    )
}

export default Home