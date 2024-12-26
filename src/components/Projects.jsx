import React from 'react'
import '../styles/Project.css'
import projectImage from '../images/projects.png'
import ScrollAnim from './ScrollAnim'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'


function Projects() {
  const ProjectData = [
    {
      name: "Ecommerce Site",
      years: "2019 - 2023",
      institution: "Sri Venkateshwaraa College Of Engineering And Technology",
      description: "Developed an AI-powered e-commerce platform using the MERN stack, featuring intelligent recommendations and seamless user experience. Currently in development and not yet hosted.",
      location: "Pondicherry",
      content:"start",
      allign:"right",
      image:project1,
      url:'https://web-1-8cji.vercel.app/'

    },
    {
      name: "Corparate Site",
      years: "2023 Sep - 2024 Mar",
      institution: "Guvi Geek Technologies",
      description: "Built and deployed a corporate website using the MERN stack, delivering a professional online presence with modern design and functionality, fully hosted and live.",
      location: "Chennai, Tamilnadu",
       content:"end",
       allign:"left",
       image:project3,
       url:'https://heyraminfrastructure.com/'

    },
    {
      name: "Real Estate Site",
      years: "2024 Apr - 2024 Dec ",
      institution: "Heyram Infrastructure",
      description: "Created a real estate platform using the MERN stack, enabling property listing management and user interactions. The site is developed but not yet hosted",
      location: "Chennai, Tamilnadu",
     content:"start",
      allign:"right",
      image:project2,
      url:'https://real-estate-liart-two.vercel.app/'

    }
  ];
  function hadnleDirect(url){
    window.open(url, '_blank');

  }
  return (
    <section id="project">
    <div className='project_main'>
    <h2>Project</h2>
    <p>A collection of innovative and impactful projects showcasing my skills and problem-solving approach."

Let me know if you'd like a more tailored description!</p>
    {ProjectData.map((e,i)=>(
      <div className='project_div1' >
      <img src={e.image} alt="" />
      <div className='project_div11'>
          <h1>{e.name}</h1>
          <p >{e.description}</p>
          <button onClick={()=>{hadnleDirect(e.url)}}>View Project</button>
      </div>
      {/* <div className='project_div12'>
          <button>
              View Code
          </button>
      </div> */}
  </div>
    ))}
    <div className='scroll_anim_main'>
      <ScrollAnim/>
    </div>
    </div>
    </section>
  )

}
export default Projects