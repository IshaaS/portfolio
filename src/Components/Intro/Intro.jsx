import React , { useState, useEffect } from 'react'
import './Intro.css'
// import profile_pic from '../../assets/ishaProfile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  "am a Software Development Engineer",
  "am passionate about building scalable and innovative solutions",
  "am pursuing my Master's in Computer Science @ Indiana University",
  "have expertise in Java, Python, JavaScript, React, and Node.js",
  "enjoy collaborating with Diverse and Agile teams"
];

const Intro = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 4000); // Change line every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const viewResume = () => {
    window.open('/isha_sasturkar_resume.pdf', '_blank');
  };

  return (
    <div id='home' className="intro">
        <h1>Hi! I am <span>Isha Sasturkar </span>and I </h1>
        <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}  // Starts small
          animate={{ opacity: 1, scale: 1 }}   // Grows to normal size
          exit={{ opacity: 0, scale: 1.2 }}    // Zooms out before disappearing
          transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
        >
          {lines[index]}
        </motion.p>
      </AnimatePresence>
        <div className='action'>
            <div className="connect">
              <AnchorLink className='anchor-link' offset={120} href='#contact'>
                Let's connect!
              </AnchorLink>
            </div>
            <div onClick={viewResume} className="resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Intro