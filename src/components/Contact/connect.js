import React,{useEffect}from 'react'
import './connect.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Connect = () => {
  useEffect(() => {
      document.getElementById("connectPage")?.scrollIntoView({ behavior:"smooth"});
  
    },[]);
  return (
    <section id="connectPage">
      <div className="connect">
            <h1 className="connectPageTitle"> Connect with Me</h1>
            <p className="connectPageSubtitle">Get in touch with me through any of the following websites</p>
            <div className="connectPageLinks"></div>
            <a href='https://www.linkedin.com/in/harini-vadivel-3581142a4/'>
                <LinkedInIcon fontSize='large' color='primary'/>
                </a>
                <a href='https://github.com/harinivadivel'><GitHubIcon fontSize='large' color='primary'/></a>
                <a href='https://www.facebook.com/profile.php?id=61574139626034'><FacebookIcon fontSize='large' color='primary'/></a>
                <a href='https://www.instagram.com/harinivadivel492/'><InstagramIcon fontSize='large'color='primary' /></a>
                
            </div>
    </section>
  )
}

export default Connect

