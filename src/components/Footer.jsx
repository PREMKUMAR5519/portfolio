import React from 'react'
import '../styles/Footer.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IoLocationSharp,IoCall,IoMail } from "react-icons/io5";

function Footer() {
  return (
    <section id='contact'>
    <div className='footer_main'>
      <div className='footer_div1'>
        <h2>GET IN TOUCH</h2>
        <p>Feel free to reach out—let's connect and create something amazing together!.</p>
        <div>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Name"
              />

            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Phone"
              />
            </div>
            <div>
            <TextField
                required
                id="outlined-required"
                label="Email"
              />
            </div>
          </Box>
        </div>
        <button>Send Message</button>


      </div>
      <div className='footer_div2'>
        <h1>Lets Discuss More</h1>
        <div className='footer_div21'>
          <div>
            <div className='footer_div211' ><IoMail /></div>
            <div className='footer_div212'>
              <h1>Mail</h1>
              <h3>premkumarananthan1@gmail.com</h3>
            </div>
          </div>

          <div>
            <div className='footer_div211' ><IoCall /></div>
            <div className='footer_div212'>
              <h1>Call</h1>
              <h3>+91 6382688488</h3>
            </div>
          </div>

          <div>
            <div className='footer_div211' ><IoLocationSharp /></div>
            <div className='footer_div212'>
              <h1>Location</h1>
              <h3>Pondicherry,India</h3>
            </div>
          </div>

          </div>

          

      </div>
    </div>
    </section>
  )
}

export default Footer