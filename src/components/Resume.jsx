import React from 'react'
import '../styles/Resume.css'
import { RiGraduationCapLine } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { PiBuildingOfficeBold } from "react-icons/pi";
import reactlogo from '../images/reactlogo.png'
import nodelogo from '../images/nodelogo.png'
import mongologo from '../images/mongologo.png'
import expresslogo from '../images/expresslogo.png'
import postmanlogo from '../images/postmanlogo.png'
import htmllogo from '../images/htmllogo.png'
import csslogo from '../images/csslogo.png'
import jslogo from '../images/jslogo.png'
import figmalogo from '../images/figmalogo.png'
import gitlogo from '../images/gitlogo.png'
import AnimatedDiv from './AnimatedDiv';

function Resume() {

  const educationData = [
    {
      degree: " B.Tech - Mechanical Engineering",
      years: "2019 - 2023",
      institution: "Sri Venkateshwaraa College Of Engineering And Technology",
      description: "I pursued my B.Tech at Sri Venkateshwaraa College of Engineering and Technology, where I gained a strong foundation in engineering principles. My time there honed my technical skills and fueled my passion for innovation.",
      location: "Pondicherry",
      content:"start",
      allign:"right",
      skills:[],
      logo:<RiGraduationCapLine/>
    },
    {
      degree: "Full Stack Development",
      years: "2023 Sep - 2024 Mar",
      institution: "Guvi Geek Technologies",
      description: "I completed a Full Stack Development course at Guvi Geek Technologies, gaining hands-on experience in building dynamic web applications and mastering modern development tools.",
      location: "Chennai, Tamilnadu",
       content:"end",
       allign:"left",
       skills:[reactlogo,nodelogo,expresslogo,mongologo,htmllogo,csslogo,jslogo,postmanlogo],
       logo:<PiCertificate/>

    },
    {
      degree: "Full Stack Developer",
      years: "2024 Apr - 2024 Dec ",
      institution: "Heyram Infrastructure",
      description: "I worked as a Full Stack Developer at Heyram Infrastructure, where I contributed to projects like e-commerce platforms and corporate websites, handling everything from scratch to deployment.",
      location: "Chennai, Tamilnadu",
     content:"start",
      allign:"right",
      skills:[figmalogo,gitlogo,reactlogo,nodelogo,expresslogo,mongologo,htmllogo,csslogo,jslogo,postmanlogo],

      logo:<PiBuildingOfficeBold/>
    }
  ];
  return (
    <div className='resume_main'>
        <h2>Education & Experience</h2>
        <p>A journey of academic growth and technical learning, complemented by hands-on experience in impactful projects, showcasing expertise in engineering, full-stack development, and end-to-end solutions.</p>
        <div className='resume_div1'>
        {educationData.map((e,i)=>(

          <div className='resume_div11' style={{alignItems:`${e.content}`}} >
              <div className='resume_div11_1'  style={{textAlign:`${e.allign}`}}>

              <div className='resume_logo'>{e.logo}</div>
              <div className='resume_div11_title'  style={{justifyContent:"space-between"}}>
                <h2>{e.years}</h2> <h3>{e.degree}</h3>
              </div>
              <div className='resume_abt_clg'>
                <p>{e.description}</p>
              </div>
              <div className='resume_location'>
                <p>{e.institution},{e.location}

</p>
              </div>
              <div className='resume_skill_logo'  style={{justifyContent:`${e.allign}`}}>
              {e.skills.map((skill, skillIndex) => (
             <AnimatedDiv id={skillIndex} delay={skillIndex}>
               <img src={skill} alt=""  />
             </AnimatedDiv>
            ))}

                
              </div>

            </div>
          


          </div>
        ))}
          <div className='resume_div13'>
            <div>
              {educationData.map((e,i)=>(
                <div></div>
              ))}
             
            </div>

          </div>

        </div>
    </div>
  )
}

export default Resume