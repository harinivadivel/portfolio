// import React,{useState} from 'react';
// import './navbar.css';
// import logo from '../../assets/logo.jpg';
// import contactImg from '../../assets/contact.png';
// import {Link} from 'react-scroll';
// import menu from '../../assets/menu.png';

// const Navbar = () => {
//     const[showMenu,setShowMenu]=useState(false);
//     return (
//         <nav className="navbar">
//             <img src={logo} alt="logo" className='logo'/>
//             <div className="desktopMenu">
//                 <Link activeclassName="active" to="intro" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500}  className="desktopMenuListItem">Home</Link>
//                 <Link activeclassName="active" to="skills" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
//                 <Link activeclassName="active" to="resume" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="desktopMenuListItem">Resume</Link>
//                 <Link activeclassName="active" to="contact" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="desktopMenuListItem">Connect</Link>
//             </div>
//             <button className="desktopMenuBtn" onClick={()=>{
//                 document.getElementById("contactPage").scrollIntoView({behavior:"smooth"});
//             }}>
//                 <img src={contactImg} alt="" className="desktopMenuImg"/> Contact Me</button>
            
//             <button onClick={()=>setShowMenu(!showMenu)}>
//                 <img src={menu} alt="Menu" className='mobMenu'/></button>
//             <div className="navMenu" style={{display:showMenu ? "flex":"none"}}>
//                 <Link activeclassName="active" to="intro" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Home</Link>
//                 <Link activeclassName="active" to="skills" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>About</Link>
//                 <Link activeclassName="active" to="resume" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Resume</Link>
//                 <Link activeclassName="active" to="contact" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Connect</Link>
//                 <Link activeclassName="active" to="contactPage" spy={true.toString()} smooth={true.toString()} offset={-50} duration={500} className="linkItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>

//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            {/* Desktop Menu */}
            
            <img src={logo} alt="logo" className="logo" />
                <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Resume</Link>
                <Link activeClass="active" to="connectPage" spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuListItem">Connect</Link>
            </div>

            {/* Contact Button */}
            <button className="desktopMenuButton" offset={-60} duration={500} onClick={() => document.getElementById("contactPage").scrollIntoView({ behavior: "smooth" })}>
                Contact Me
            </button>

            {/* Mobile Menu Button */}
            <button className="menuButton" onClick={() => setShowMenu(!showMenu)}>
                ☰
            </button>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="navMenu">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Resume</Link>
                    <Link activeClass="active" to="connectPage" spy={true} smooth={true} offset={-10} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Connect</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
