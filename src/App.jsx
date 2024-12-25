import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollAnim from './components/ScrollAnim'
import OtherProject from './components/OtherProject'
import { Link } from 'react-scroll';

function App() {
  return (
    <>
  <div style={{width:'100%'}}>
  <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Resume/>
    <Projects/>
    <OtherProject/>
    <Footer/>
  </div>
 
     
    </>
  )
}

export default App