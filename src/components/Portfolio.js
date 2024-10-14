import React from 'react'
import '../style/Portfolio.css'
import '../style/Header.css'
import Header from './Header'
import Rotate from 'react-reveal/Rotate'
import Zoom from 'react-reveal/Zoom'

const Portfolio = () => {
  return (
    <div>
      <Header/>
      <div className='portfolio'>
        <h1>My Projects</h1>
          <div className='project-flex'>
          <Zoom>
            <div className='row1'>
              <img src='/images/tesla.png'/>
              <h3>TESLA-CLONE- REACT.JS/REDUX</h3>
              <a href='https://tesla-clone-coral-rho.vercel.app/'>live app</a>
            </div>

            <div className='row1'>
              <img src='/images/CLUB.png'/>
              <h3>CLUBHOUSE-CLONE- REACT.JS/REDUX/FIREBASE</h3>
              <a href='https://clubhouse-clone-ff21c.web.app'>live app</a>
            </div>

            <div className='row1'>
              <img src='/images/backgr.jpg'/>
              <h3>RESTAPI- REACT.JS</h3>
              <a href='https://countriesapi-two-flame.vercel.app/'>live app</a>
            </div>

            <div className='row1'>
              <img src='/images/stop.png'/>
              <h3>STOP-CLOCK- HTML, CSS &JAVASCRIPT</h3>
              <a href='https://stop-watch-taupe-kappa.vercel.app/'>live app</a>
            </div>

            <div className='row1'>
              <img src='/images/grade.png'/>
              <h3> GRADING-STYTEM- HTML, CSS&JAVASCRIPT</h3>
              <a href='https://grading-system-sigma.vercel.app/'>live app</a>
            </div>

            <div className='row1'>
              <img src='/images/whatsapp.png'/>
              <h3>WHATSAPP-CLONE- HTML, CSS &JAVASCRIPT</h3>
             <a href='https://whatsapp-clone-gules-tau.vercel.app/'>live app</a>
            </div>

            </Zoom>
          </div>
      </div>
    </div>
  )
}

export default Portfolio