import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b401469c-3093-4631-8b25-58aed838c208");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
        alert(res.message);
        event.target.reset();
    };
    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1 className='web'>Get In Touch</h1>
                <h1 className="mob">Contact</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    {/* need to wokr on this(content to write) */}
                    <p>I'm actively looking for full-time opportunities starting May 2025 and I love collaborating on
                     exciting projects. Whether it’s brainstorming new ideas, building innovative solutions, or simply exchanging thoughts—let’s connect and create something amazing!
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>ishsastu@iu.edu</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+1(585)981-0761</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>IN, United States</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email'/>
                    <label htmlFor="">Write your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}
export default Contact