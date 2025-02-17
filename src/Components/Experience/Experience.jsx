import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import download from '../../assets/download.svg'
import './Experience.css'
import { motion } from 'framer-motion';

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/isha_sasturkar_resume.pdf'; // Replace with actual resume path
    link.download = 'isha_sasturkar_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

const experiences = [
  {
    position: 'Software Engineer Intern',
    company: 'Tech Corp',
    duration: 'May 2024 - Aug 2024',
    description: 'Developed scalable web applications using React and Node.js. Implemented API integrations and optimized performance.',
  },
  {
    position: 'Frontend Developer',
    company: 'Startup XYZ',
    duration: 'Jan 2023 - Dec 2023',
    description: 'Designed and implemented responsive UI components, improving user engagement by 30%.',
  },
  {
    position: 'Research Assistant',
    company: 'University Lab',
    duration: 'Aug 2022 - May 2023',
    description: 'Worked on AI-driven models for data analysis and visualization, publishing findings in academic journals.',
  }
];


const Experience = () => {
  return (
    <div id='experience' className='experience'>
        <div className="experience-title">
            <h1>Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <button onClick={downloadResume} className='download-button'><img src={download} alt="" /> My Resume</button>
        <div className='experience-list'>
        {experiences.map((exp, index) => (
          <div className='experience-wrapper' key={index}>
            {index !== experiences.length && index !== 0 && <div className='connector'></div>}
            <motion.div 
              className='experience-card'
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2 className='position'>{exp.position}</h2>
              <h3 className='company'>{exp.company}</h3>
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