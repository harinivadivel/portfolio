import React from "react";
import './resume.css'
import { Link } from 'react-scroll';
import Resume from '../../assets/resume.jpg';

const resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "https://lavender-hettie-34.tiiny.site";
        const link = document.createElement("a");
        link.href = pdfUrl;
        // link.download = "resume.pdf"; // specify the filename
        // document.body.appendChild(link);
        link.click();
        // document.body.removeChild(link);
    };
    return (
        <>
            <center id="resume">
                <h1>My Resume</h1>
                <h3>
                    Click on below button to download PDF
                    file
                </h3>
                <div>
                <img src={Resume} alt="Resume"  className="resumeImg"/>
                </div>
                <Link><button onClick={onButtonClick} className="downloadbtn">Download PDF</button></Link>
            </center>
        </>
    );
};

export default resume;