import React, { useRef } from 'react'
import './contact.css'
// import LinkedIn from '../../assets/linked.png';
// import GitHub from '../../assets/github.png';
// import Instagram from '../../assets/instagram.png';
// import Facebook from '../../assets/facebook.png';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  // const [captchaValue, setCaptchaValue] = React.useState(null);
  
  // const handleSumbit = (e) => {
  //   e.preventDefault();
  //   if (!captchaValue) {
  //     alert("Please verify you are not a robot!");
  //     return;
  //   }
  //   alert("Form submitted successfully!");
  // };
  useEffect(() => {
    document.getElementById("contactPage")?.scrollIntoView({ behavior:"smooth"});

  },[]);
  const [captchaValue,setCaptchaValue]=React.useState(null);
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      if (!captchaValue) {
            alert("Please verify you are not a robot!");
            return;
          }
          alert("Form submitted successfully!");

      emailjs.sendForm(
          "service_2sft42b",
          "template_f9oyumm",
          form.current,
          "lNaP8P8VnuWeBCYlV"
      )
      .then((response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent successfully!");
      })
      .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message.");
      });

      e.target.reset(); // Reset form fields
  };


  // const form = useRef()
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_2sft42b', 'template_f9oyumm', form.current, {
  //       publicKey: 'pIvB1HZMMrrbmFykucmVO',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );

  return (
    <section id="contactPage">
        <div className="contact-container">
             <h1 className="contactPageTitle">Contact Me</h1>
             <span className="contactDesc">Please fill out the form below to discuss any work opportunities or collaborations</span>
             <form className="contactForm" ref={form} onSubmit={sendEmail}> 
                <input type="text"className="name" placeholder="Name" name='your_name'/>
                <input type="email"className="email" placeholder="Email" name='your_email'/>
                <textarea className="msg" name="message" row="10"placeholder="Message"></textarea>
                <ReCAPTCHA
           sitekey="6LeMGfkqAAAAACI1nR7akb1jEVVu_h3-VgEGhm8S" onChange={(value) => setCaptchaValue(value)} />
                <button  type="submit" value="Submit" className="sendbtn">Submit</button>
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
