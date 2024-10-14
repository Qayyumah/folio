import React from 'react'
import '../style/About.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div style={{backgroundColor:'#000'}}>
        <Header/>       
        <div className='about'>
          <h1>About</h1> 
            <div className='ab-flex'>
              <Fade top>
              <div className='aboutMe'>
                <Fade right>
                <h2>About Me</h2>
                </Fade>
                <p>I'm Salman Qayyumah, a Front-End Web Developer based in Nigeria.
                I love combining the worlds of logic and creative design to make eye-catching,
                accessible, and user-friendly websites and applications.</p>
                <p>I'm passionate about creating great user experiences and have a strong understanding
                of usability and accessibility standards. I'm excited to make the leap and continue refining my skills with the right company.</p> 
                <Zoom><Link to='/contact'>Hire Me</Link></Zoom> 
              </div>
              </Fade>
              <Fade bottom>
              <div className='skill'>
                <Fade right>
                <h2>Skill</h2>
                </Fade>
                <div className='col1'>
                  <h4>JAVASCRIPT</h4>
                  <div className='p-tag'>
                    <Fade left> 
                    <p style={{width:'65%'}}></p>
                    </Fade>
                    <h3>65%</h3>
                  </div>
                  
                </div>
                <div className='col1'>
                  <h4>REACT/REDUX</h4>
                  <div className='p-tag'>
                    <Fade left> 
                    <p style={{width:'85%'}}></p>
                    </Fade>
                    <h3>85%</h3>
                  </div>
                </div>
                <div className='col1'>
                  <h4>CSS/SASS</h4>
                  <div className='p-tag'>
                    <Fade left>
                    <p style={{width:'75%'}}></p>
                    </Fade>
                    <h3>75%</h3>
                  </div>
                </div>
                <div className='col1'>
                  <h4>HTML</h4>
                  <div className='p-tag'>
                    <Fade left> 
                    <p style={{width:'90%'}}></p>
                    </Fade>
                    <h3>90%</h3>
                  </div>
                </div>
              </div>
              </Fade>
            </div>
        </div>
    </div>
  )
}

export default About