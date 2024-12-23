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
        },
        {
          name: "Corparate Site",
          years: "2023 Sep - 2024 Mar",
          institution: "Guvi Geek Technologies",
          description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
          location: "Chennai, Tamilnadu",
           content:"end",
           allign:"left",
    
        },
        {
          name: "Real Estate Site",
          years: "2024 Apr - 2024 Dec ",
          institution: "Heyram Infrastructure",
          description: "Columbia University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
          location: "Chennai, Tamilnadu",
         content:"start",
          allign:"right",
    
        }
      ];
  return (
    <div className='op_main'>
        <h1>More Projects</h1>
       <div className='op_con'>
       <div>
          <img src={otherproject1} alt="" />
          <h1>Attendance Module</h1>
          <p>Columbia University is an educat</p>
          <button>View</button>
        </div>
        <div>
          <img src={Frame} alt="" />
          <h1>More Projects</h1>
          <p>Columbia University is an educat</p>
          <button>View</button>
        </div>

       </div>

 
    </div>
  )
}

export default OtherProject