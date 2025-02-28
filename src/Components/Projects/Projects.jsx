import React, {useState, useEffect} from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import external from '../../assets/external.svg'
import project1 from '../../assets/project1.jpeg'
import project2 from '../../assets/project2.jpeg'
import project3 from '../../assets/project3.jpeg'
import project4 from '../../assets/project4.jpeg'

import './Projects.css'
import { motion } from 'framer-motion';

const projectImages = [
  project1, project2, project3, project4
];

const techStack = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div id='projects' className='projects'>
        <div className="projects-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="section">
        <div className="projects-sections">
            <a href="https://github.com/IshaaS" target="_blank" rel="noopener noreferrer">
                <h2>Book Rental Platform</h2>
                <img src={external} alt="" />
            </a>
            <div className="partition">
              <div className="left">
                <h3>• UBook Rental is an innovative book-sharing platform that connects book owners (Lenders) with readers (Renters), making book rentals effortless and secure.</h3>
                <h3>• Implemented core platform features, including secure authentication (JWT, OAuth, 2FA), geolocation-based book availability
(Google Maps API), secure payments, and real-time chat to enhance security, accessibility, and user engagement.</h3>
              <h3>• Led and mentored a team of first-time developers in an Agile setting, conducting code reviews, knowledge sharing, and sprint-
based development for timely deployment.</h3>
              </div>
              <div className="right-image-slider">
                <button onClick={prevImage} className="slider-btn">❮</button>
                <img src={projectImages[currentImageIndex]} alt="Project Screenshot" className="slider-image" />
                <button onClick={nextImage} className="slider-btn">❯</button>
              </div>
            </div>
            <br />
            <h3>Roles:</h3>
            <div className="roles">
            <p>
            👤 Renters – Browse, rent books, track rental history, and return books.</p>
            <p>
            📚 Lenders – List books for rental, set availability, set charges per day and manage transactions.
            </p>
            <p>
            🛠️ Admins – Oversee platform operations, moderate user activities, and handle disputes or policy violations.
            </p>
            </div>
            <br />
            <h3>Tech-Stack</h3>
            <br />
            <div className="tech-stack">
              {techStack.map((techono, index) => (
                    <motion.div 
                        key={index} 
                        className="techno"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={techono.icon} alt={techono.name} className="techno-icon" />
                        <p className="techno-text">{techono.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Projects