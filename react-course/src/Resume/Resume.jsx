import React from 'react';
// import './Resume.css';

const Resume = () => {
    return (
        <div>
            <div id="header" />
            <div className="left" />
            <div className="stuff">
                <br />
                <br />
                <h1>Resume</h1>
                <h2>Rajballav Kumar</h2>
                <hr />
                <br />
                <p className="head">Interests</p>
                <ul>
                    <li>Drawing</li>
                    <li>Photography</li>
                    <li>Design</li>
                    <li>Programming</li>
                    <li>Satta </li>
                </ul>
                <p className="head">Skills</p>
                <ul>
                    <li>Web Design with HTML &amp; CSS</li>
                    <li>Full Stack Developer (MERN)</li>
                </ul>
                <p className="head">Education</p>
                <ul>
                    <li> High School</li>
                    <li>Mahabodhi Mahavidlaya of Arts</li>
                    <li>Codeacademy</li>
                </ul>
                <p className="head">Experience</p>
                <ul>
                    <li>Student Technology Intern for Wilton School District</li>
                    <li>Babysitter</li>
                </ul>
                <p className="head">Extracurriculars</p>
                <ul>
                    <li>Recycling Club</li>
                    <li>Gardening Club</li>
                    <li>Book Club</li>
                </ul>
            </div>
            <div className="right" />
            <div id="footer">
                <h2 id="name">Rajballav kumar</h2>
            </div>
        </div>
    )
}

export default Resume