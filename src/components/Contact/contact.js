import React, { useRef } from 'react'
import './contact.css'
// import LinkedIn from '../../assets/linked.png';
// import GitHub from '../../assets/github.png';
// import Instagram from '../../assets/instagram.png';
// import Facebook from '../../assets/facebook.png';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  useEffect(() => {
    document.getElementById("contactPage")?.scrollIntoView({ behavior:"smooth"});

  },[]);
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2sft42b', 'template_f9oyumm', form.current, {
        publicKey: 'pIvB1HZMMrrbmFykucmVO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div className="contact-container">
             <h1 className="contactPageTitle">Contact Me</h1>
             <span className="contactDesc">Please fill out the form below to discuss any work opportunities or collaborations</span>
             <form className="contactForm"ref={form} onSubmit={sendEmail}> 
                <input type="text"className="name" placeholder="Name" name='your_name'/>
                <input type="email"className="email" placeholder="Email" name='your_email'/>
                <textarea className="msg" name="message" row="10"placeholder="Message"></textarea>
                <button type="submit" value="Send" className="submitButton">Submit</button>
             </form>
        </div>
        {/* <div id="connect">
            <h1 className="coctactPageTitle"> Connect with Me</h1>
            <p className="contactPageSubtitle">Get in touch with me through any of the following websites</p>
            <div className="contactPageLinks"> */}
                {/* <img src={LinkedIn} alt="LinkedIn" className="link"/>
                <img src={GitHub} alt="GitHub" className="link"/>
                <img src={Instagram} alt="Instagarm" className="link"/>
                <img src={Facebook} alt="FaceBook" className="link"/> */}
               
                {/* <a href='https://www.linkedin.com/in/harini-vadivel-3581142a4/'>
                <LinkedInIcon fontSize='large' color='primary'/>
                </a>
                <a href='https://github.com/harinivadivel'><GitHubIcon fontSize='large' color='primary'/></a>
                <a href='https://www.facebook.com/profile.php?id=61574139626034'><FacebookIcon fontSize='large' color='primary'/></a>
                <a href='https://www.instagram.com/harinivadivel492/'><InstagramIcon fontSize='large'color='primary' /></a>
                
            </div> */}
        
    </section>
  )
}

export default Contact
