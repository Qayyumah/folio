import React from 'react'
import '../style/Header.css'
import styled from 'styled-components'
import {Link} from  'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false)
  return (
    <div className='header'>
        <Zoom>
        <Fade bottom>
          <h1>QAYYUMAH</h1>
        </Fade>
        <li className='li'>
          <Link to="/"><a>Home</a></Link>
          <Link to="/about"><a>About</a></Link>
          <Link to="/portfolio"><a>Portfolio</a></Link>
          <Link to="/contact"><a>Contact</a></Link>
        </li>

        <nav>
          <CustomMenu onClick={()=>setBurgerStatus(true)}/>
          
          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
            <Link to="/"><a>Home</a></Link>
            <Link to="/about"><a>About</a></Link>
            <Link to="/portfolio"><a>Portfolio</a></Link>
            <Link to="https://products-nine-eta.vercel.app/"><a>Products</a></Link>
            <Link to="/contact"><a>Contact</a></Link>
          </BurgerNav>
        </nav>
        </Zoom>
    </div>
  )
}

export default Header

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    padding: 0 30px;
    color: #fff;
`
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    margin-top: -20px;
    background-image: radial-gradient(#fff, #000);
    width: 100vw;  
    z-index: 2000;
    list-style: none;
    padding: 25px 27px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.2s;
    height: 100vh;
    a{
      margin-top: 70px;
      text-align: center;
      /* text-decoration-line: none; */
      font-weight: 600;
      color: black;
      padding: 25px 0;
      font-size: 20px;
      text-transform: uppercase;

      &:hover{
        text-transform: uppercase;
        color: #ccc;
        font-weight: 900;
        background-position: 100%;
        transform: translateX(1rem);
        transition: all 1s;
        background-size: 220%;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
      }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: #fff;

`
const CloseWrapper = styled.div`
     display: flex;
     justify-content: flex-end;
`