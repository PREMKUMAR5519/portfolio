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
      description: "Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
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
      description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
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
      description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
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
        <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
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