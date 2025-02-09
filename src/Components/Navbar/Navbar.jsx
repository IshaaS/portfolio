import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Isha</h1>
        {/* <img src={} alt="" /> */}
        <ul className='nav-menu'>
            <li>About Me</li>
            <li>Resume</li>
            <li>Skills</li>
            <li>Projects</li>
            {/* <li>LinkedIn</li>
            <li>Github</li>
            <li>Instagram</li> */}
        </ul>
        <div className="nav-connect">Let's Connect</div>
    </div>
  )
}

export default Navbar