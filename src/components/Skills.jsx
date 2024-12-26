import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css'

import PercentBar from './PercentBar'
function Skills() {
  const [isInView, setIsInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
    const skills =[ 
  { id: 1, skill: "JavaScript",percentage:"80",delay:0.2 },
  { id: 2, skill: "ReactJS",percentage:"80",delay:0.4 },
  { id: 3, skill: "Node.js",percentage:"70",delay:0.6 },
  { id: 4, skill: "HTML/Css",percentage:"80",delay:0.8 },
  { id: 5, skill: "MongoDB",percentage:"70",delay:0.9 },
  { id: 6, skill: "Express.js",percentage:"80",delay:1 },
  { id: 7, skill: "Figma",percentage:"40",delay:1.2 },

    ]
  return (
    <div className='skills_main'>
        <h1>My skills</h1>
        <p>A showcase of technical expertise and creative problem-solving across diverse technologies.</p>
        <div className='skills_div1' ref={skillsRef}>
         {skills.map((e,i)=>(
             <div>
              <PercentBar name={e.skill} percentage={e.percentage} delay={e.delay} isInView={isInView} />
             </div>
         ))}
      
        </div>
    </div>
  )
}

export default Skills