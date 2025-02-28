import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/nav_underline.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <div className="logo">
          <AnchorLink className='anchor-link' offset={300} href='#home'>
            <h1>Isha</h1>
            <img src={logo} alt="" />
          </AnchorLink>
        </div>
        <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
            <img onClick={closeMenu} src={menu_close} alt="" className='nav-mob-close' />
            <li><AnchorLink className='anchor-link' offset={120} href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={120} href='#skills'>Skills</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={120} href='#experience'>Experience</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={120} href='#projects'>Projects</AnchorLink></li>
            <li className='nav-con'><AnchorLink className='anchor-link' offset={120} href='#contact'>Let's Connect</AnchorLink></li>
        </ul>
        <div className="social-links">
          <a href="https://linkedin.com/in/isha-sasturkar" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/IshaaS" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/isha_sasturkar/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <div className="nav-connect"><AnchorLink className='anchor-link' offset={120} href='#contact'>Let's Connect</AnchorLink></div>
        </div>
    </div>
  )
}

export default Navbar