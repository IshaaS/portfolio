import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Skills.css'
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' }
];


const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="skills-title">
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className="skill-card"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p className="skill-text">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>    
      )
}

export default Skills