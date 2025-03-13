import React from 'react'
import './skills.css'
import AIML from '../../assets/ai-ml.png';
import WebDesign from '../../assets/web-design.png';
import AppDesign from '../../assets/app-design.png';


const skills = () => {
  return (
    <section id="skills">
         <span className="skillTitle">What I do</span>
         <span className="skillDesc">I am a skilled and passinate wed designer with a focus on creating visually appealing and user-friendly websites.
         I focus on building the visual and interactive elements of websites and web applications using HTML, CSS, and JavaScript. 
         I actively learn new frameworks and technologies to stay updated with the latest web development trends while collaborating closely with designers and back-end developers to bring website designs to life.
         </span>
         <div className="skillBars">
         <div className="skillBar">
              <img src={AIML} alt="AIML" className="skillBarImg" />
              <div className="skillBarText">
                <h2>AIML</h2>
                  <p>AI is the ability of a machine to mimic human-like behavior, 
                    while ML is the process of teaching machines to learn from data.</p>
               </div>   
            </div>
            <div className="skillBar">
              <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Website Design</h2>
                  <p>This demo text can be changed while making the production ready website.</p>
               </div>   
            </div>
            <div className="skillBar">
              <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>App Design</h2>
                  <p>You can write text related to mobile app development.</p>
               </div>   
            </div>
         </div>

    </section>
  )
}

export default skills
