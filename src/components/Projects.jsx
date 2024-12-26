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
      description: "Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
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
      description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
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
      description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
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
    <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
    {ProjectData.map((e,i)=>(
      <div className='project_div1' >
      <img src={e.image} alt="" />
      <div className='project_div11'>
          <h1>{e.name}</h1>
          <p>A collection of innovative and impactful projects showcasing my skills and problem-solving approach.</p>
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