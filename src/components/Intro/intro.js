import React from 'react';
import './intro.css';
import bg from'../../assets/Robots.png';
import btnImg from'../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Harini </span> Student of AI&ML</span>
                <p className="introPara">Aspiring AIML & FullStack Professional seeking challenging opportunities to apply</p>
                    <p className='introPara'> my technical skills and problem-solving abilities for the growth of an innovative organization.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />

        </section>
    );
};

export default Intro;
