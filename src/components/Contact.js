import React from 'react'
import '../style/Contact.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'

const Contact = () => {
  return (
    <div>
      <Header/>
      <div className='contact'>
        <h1>Contact</h1>
        <Zoom>
        <div className='text'>
          <h3>E-mail: qayyumatsalman@gmail.com</h3>
          <h3>GitHub: <a href='https://github/qayyumah'>https://github/qayyumah</a></h3>
          <h3>Linkedin: <a href='qayyumah-salman@linkedin.com'>qayyumah-salman@linkedin.com</a></h3>
          <h3>PhoneNumber: 09064693383</h3>
        </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Contact