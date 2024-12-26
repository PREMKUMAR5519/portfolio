import React from 'react'
import '../styles/OtherProject.css'
import otherproject1 from '../images/otherproject1.png'
import Frame from '../images/Frame.png'

function OtherProject() {
    const ProjectData = [
        {
          name: "Ecommerce Site",
          years: "2019 - 2023",
          institution: "Sri Venkateshwaraa College Of Engineering And Technology",
          description: "Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
          location: "Pondicherry",
          content:"start",
          allign:"right",
          url:'https://astounding-genie-15d20a.netlify.app/'
        },
        {
          name: "Corparate Site",
          years: "2023 Sep - 2024 Mar",
          institution: "Guvi Geek Technologies",
          description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
          location: "Chennai, Tamilnadu",
           content:"end",
           allign:"left",
           url:'https://astounding-genie-15d20a.netlify.app/'
    
        },
        {
          name: "Real Estate Site",
          years: "2024 Apr - 2024 Dec ",
          institution: "Heyram Infrastructure",
          description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
          location: "Chennai, Tamilnadu",
         content:"start",
          allign:"right",
          url:'https://astounding-genie-15d20a.netlify.app/'

    
        }
      ];
      function hadnleDirect(url){
        window.open(url, '_blank');
    
      }
  return (
    <div className='op_main'>
        <h1>More Projects</h1>
       <div className='op_con'>
       <div>
          <img src={otherproject1} alt="" />
          <h1>Attendance Module</h1>
          <p>Designed and implemented an attendance management module to streamline tracking and reporting. The system ensures accuracy and provides real-time attendance insights, leveraging modern web technologies.</p>
          <button  onClick={()=>{hadnleDirect('https://attendance-seven-chi.vercel.app/')}}>View</button>
        </div>
        <div>
          <img src={Frame} alt="" />
          <h1>More Projects</h1>
          <p>Worked on diverse projects, including dynamic web applications and custom solutions, showcasing expertise in full-stack development, user-centric design, and efficient problem-solving</p>
          <button  onClick={()=>{hadnleDirect('https://github.com/premkumar5519')}}>View</button>
        </div>

       </div>

 
    </div>
  )
}

export default OtherProject