import React from 'react'
import './Intro.css'
import profile_pic from '../../assets/ishaProfile.png'

const Intro = () => {
  return (
    <div className="intro">
        {/* <img src={profile_pic} alt="" /> */}
        <h1>Hi! I am <span>Isha Sasturkar </span>and I </h1>
        <p>am a Software Development Engineer, pursuing my Master's in Computer Science @Indiana University, Bloomington (Graduating May 2025)</p>
        {/* need to do
        these above details with few more should go in effect */}
        <div className='action'>
            <div className="connect">
                Let's connect!
            </div>
            <div className="resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Intro