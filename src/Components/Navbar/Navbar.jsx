import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/nav_underline.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <AnchorLink className='anchor-link' href='#home'>
            <h1>Isha</h1>
            <img src={logo} alt="" />
          </AnchorLink>
        </div>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'>Experience</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink></li>
        </ul>
        <div className="social-links">
          <a href="https://github.com/IshaaS" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/isha-sasturkar" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/isha_sasturkar/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
        </div>
    </div>
  )
}

export default Navbar