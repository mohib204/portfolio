import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Me</h1>
        <p className="about-intro">
          Hi, I'm <span>Muhammad Mohib</span>, a passionate web developer with a knack for building interactive and responsive web applications. 
          I love to create user-friendly designs and solve challenging problems using modern web technologies.
        </p>
        <div className="about-details">
          <div className="about-section">
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js & Express</li>
              <li>HTML</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Experience</h2>
            <p>
            As a fresher with hands-on experience in development,
             I have worked on building responsive web applications,
              creating dynamic user interfaces, and developing RESTful APIs.
               My focus has always been on delivering high-quality and scalable solutions. 
               I am passionate about learning new technologies and contributing to impactful projects as a dedicated and enthusiastic developer.







            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
