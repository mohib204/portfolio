import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          <h1>Hello, I'm <span>Muhammad Mohib</span></h1>
          <p>
            I am a passionate web developer specializing in creating modern and responsive web applications. 
            Let's build something amazing together!
          </p>
          <div className="home-buttons">
            <a href="/projects" className="btn-primary">View My Projects</a>
            <a href="/contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="home-image">
        </div>
      </div>
    </div>
  );
};

export default Home;
