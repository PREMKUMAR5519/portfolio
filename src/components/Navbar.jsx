import React, { useState,useEffect } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
    const [selected, setSelected] = useState("home")

    function handleHome(val){
        setSelected(val)
    }
    console.log(selected)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        // Check if the page is scrolled more than 100px
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className={`nav_main ${isScrolled}`}>
       <div className='nav_con'>
      <Link to="home" smooth={true} duration={500}>
      <div onClick={()=>handleHome('home')} className={`nav_con1 ${selected=='home'?'home':""}`}>Home</div>
      </Link>
      <Link to="about" smooth={true} duration={500}>
      <div onClick={()=>handleHome('about')} className={`nav_con1 ${selected=='about'?'about':""}`}>About Me</div>
      </Link>
      <Link to="project" smooth={true} duration={500}>
      <div onClick={()=>handleHome('project')} className={`nav_con1 ${selected=='project'?'project':""}`}>Projects</div>
      </Link>
   
      <Link to="contact" smooth={true} duration={500}>
      <div onClick={()=>handleHome('contact')} className={`nav_con1 ${selected=='contact'?'contact':""}`}>Contact</div>
      </Link>
       </div>
    </div>
  )
}

export default Navbar