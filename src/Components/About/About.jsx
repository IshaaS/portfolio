import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_pic from '../../assets/image1.jpeg'

const About = () => {
  return (
    <div className='about'>
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
                    I a pursuing my master's in computer science
                    </p>
                    <p>
                    some text xyz
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>xyz1</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>xyz1</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>xyz1</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>xyz1</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Best Inter of the year</h1>
                <p>Lodgistics Pvt. Lmt.</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Best Inter of the year</h1>
                <p>Lodgistics Pvt. Lmt.</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Best Inter of the year</h1>
                <p>Lodgistics Pvt. Lmt.</p>
            </div>
        </div>
    </div>
  )
}

export default About