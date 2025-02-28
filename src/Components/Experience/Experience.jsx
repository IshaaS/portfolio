import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import download from '../../assets/download.svg'
import './Experience.css'
import external from '../../assets/external.svg'
import { motion } from 'framer-motion';

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/isha_sasturkar_resume.pdf';
    link.download = 'isha_sasturkar_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const experiences = [
  {
    position: 'Teaching Assistant',
    company: 'Indiana University, Bloomington',
    duration: 'Aug 2024 - Present',
    link: 'https://www.linkedin.com/school/iuluddy',
    description: 'Facilitated a core Python programming course for 500+ students. Led hands-on lab sessions focusing on best coding practices, achieving a 100% lab completion rate. Served as Scrum Master for multiple full-stack projects using MERN, Spring Boot, Django, Docker, and cloud platforms.',
  },
  {
    position: 'Software Development Intern',
    company: 'Lodgistics Software India LLP',
    duration: 'Mar 2023 - Jun 2023',
    link: 'https://www.linkedin.com/company/lodgistics-llc/',
    description: 'Led the development of a major application transformation, unifying three core features into a single interface using JavaScript, ReactJS, and Material UI, enhancing accessibility and user interactions. Ensured smooth deployments by conducting end-to-end testing across 3+ releases, earning recognition for maintaining high quality. Collaborated with global Agile teams, achieving a 95% sprint task completion rate.',
  },
  {
    position: 'Software Development Intern',
    company: 'Lodgistics Software India LLP',
    duration: 'Aug 2022 - Nov 2022',
    link: 'https://www.linkedin.com/company/lodgistics-llc/',
    description: 'Designed and implemented end-to-end CRUD operations to customize automating birthday and work anniversary post templates, to enhance engagement for U.S. hospitality professionals. Collaborated in pair programming with a mentor, delivering 3+ scalable and maintainable solutions while adopting best coding practices. Provided critical QA support with 10+ contributions, ensuring a smooth major feature release through unit, integration, and end-to-end testing.',
  }
];


const Experience = () => {
  return (
    <div id='experience' className='experience'>
        <div className="experience-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='experience-list'>
        <button onClick={downloadResume} className='download-button'><img src={download} alt="" /> My Resume</button>
        {experiences.map((exp, index) => (
          <div className='experience-wrapper' key={index}>
            {index !== experiences.length && index !== 0 && <div className='connector'></div>}
            <motion.div 
              className='experience-card'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2 className='position'>{exp.position}</h2>
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                <h3 className='company'>{exp.company}</h3>
                <img src={external} alt="" />
              </a>
              
              <p className='duration'>{exp.duration}</p>
              <p className='description'>{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
        </div> 
  )
}

export default Experience