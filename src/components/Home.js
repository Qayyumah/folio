import React from 'react'
import { useState } from 'react'
import '../style/Home.css'
import Header from './Header'
import {Link} from 'react-router-dom' 
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Flash'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'

const Home = () => {
  const [button, setButton] = useState(false)
  return (
    <div className='container'>
      <Header/>
        <div className='content'>
            <div className='Home'>
              <div className='home-flex'>
                <Fade right>
                <div className='h3'>
                  <Fade bottom>
                  <h1>HELLO!!!<br/>I'M QAYYUMAH</h1>
                  </Fade>
                  <h3>A Passionate <span>FRONTEND DEVELOPER</span></h3>
                </div>
                </Fade>
                <Fade left>
                <img src='/images/Qayyumah.png'/>
                </Fade>
              </div>
              <Fade bottom>
              <div className='btn'>
                <a href='#con'>Hire Me</a>
              </div>
              </Fade>
            </div>

            <Rotate>
            <div className='con'>
              <Fade bottom>
              <h1>About</h1>
              </Fade>
                <Zoom>
                <div className='aboutMe'>
                  <p>I'm Salman Qayyumah, a Front-End Web Developer based in Nigeria.
                  I love combining the worlds of logic and creative design to make eye-catching,
                  accessible, and user-friendly websites and applications.</p>
                  <p>I'm passionate about creating great user experiences and have a strong understanding
                  of usability and accessibility standards. I'm excited to make the leap and continue refining
                  my skills with the right company.</p> 
                </div>
                </Zoom>
                <Fade top>
                  <Link to='/about' className='ab-btn'>see more</Link>
                </Fade>
            </div>
            </Rotate>

            <div className='portfolio'>
            <Fade bottom>
              <h1>My Projects</h1>
            </Fade>
              <div className='project-flex'>
              <Fade left>
                <div className='row1'>
                  <img src='/images/tesla.png'/>
                  <h3>TESLA-CLONE- REACT.JS/REDUX</h3>
                  <a href='https://tesla-clone-coral-rho.vercel.app/'>live app</a>
                </div>
              </Fade>
              <Fade right>
                <div className='row1'>
                  <img src='/images/CLUB.png'/>
                  <h3>CLUBHOUSE-CLONE- REACT.JS/REDUX/FIREBASE</h3>
                  <a href='https://clubhouse-clone-ff21c.web.app'>live app</a>
              </div>
              </Fade>
              <Fade left>
                <div className='row1'>
                  <img src='/images/grade.png'/>
                  <h3> GRADING-STYTEM- HTML, CSS&JAVASCRIPT</h3>
                  <a href='https://grading-system-sigma.vercel.app/'>live app</a>
                </div>
              </Fade>
              </div>

              <Link to='/portfolio' className='btns'>see more</Link>
            </div>

            <div className='contacts' id='con'>
              <Fade bottom>
              <h1>Contact</h1>
              </Fade>
              <Fade left>
              <p>To get in touch with me, click on the button below.</p>
              </Fade>
              <Fade bottom>
              <Link to='/contact' className='c-btn'>Hire Me</Link>
              </Fade>
            </div>

          </div>
        </div>
  )
}

export default Home