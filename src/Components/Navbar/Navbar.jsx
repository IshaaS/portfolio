import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/nav_underline.svg'

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
            <li><AnchorLink className='anchor-link' offset={50} href='#resume'>Resume</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'>Projects</AnchorLink></li>
            {/* <li>LinkedIn</li>
            <li>Github</li>
            <li>Instagram</li> */}
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
    </div>
  )
}

export default Navbar