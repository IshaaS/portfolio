import React, { useState, useEffect } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_pic from '../../assets/isha1.png'
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
    { name: "React", width: "85%" },
    { name: "Node.js", width: "60%" },
    { name: "MongoDB", width: "70%" },
    { name: "Agile Methodologies", width: "100%" },
    { name: "Java", width: "80%" }
];

const About = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 3000); // Change skill every 2 seconds

        return () => clearInterval(interval);
    }, []);
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>
                        With a strong foundation in software development and a passion for building scalable solutions, I have experience in full-stack development, system design, and cloud computing.
                    </p>
                    <p>
                        My academic journey has been shaped by courses that have deepened my understanding of Database Technologies, Advanced Algorithms, Software Engineering, Machine Learning, and Network Security.
                    </p>
                    <p>
                        I have collaborated with Agile teams, actively participating in Scrum ceremonies, pair programming, and cross-functional teamwork to develop high-quality software solutions.
                    </p>
                    <p>
                    Beyond coding, I am passionate about mentoring, problem-solving, and continuous learning. Whether it's optimizing backend performance, creating seamless user experiences, or driving impactful software solutions, I am always eager to take on new challenges and make a difference in the tech world.
                    </p>
                </div>
                <div className="about-skills">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            className="about-skill"
                            initial={{ opacity: 0, width: "0%" }}
                            animate={{ opacity: 1, width: skills[index].width }}
                            exit={{ opacity: 0, width: "0%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p>{skills[index].name}</p>
                            <hr style={{ width: skills[index].width }} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Best Inter of the Year</h1>
                <p>Lodgistics Pvt. Lmt.</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Mentored 500+ Students</h1>
                <p>Indiana University, Bloomington</p>
            </div>
        </div>
    </div>
  )
}

export default About