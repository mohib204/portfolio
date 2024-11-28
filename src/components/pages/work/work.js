import React from "react"; 
import "./work.css";

const workData = [
  {
    id: 1,
    title: "Blog-Frontend",
    description: "A responsive blog web Aplication and admin panel.",
    githubLink: "https://github.com/mohib204/full-project.git"
  },
  {
    id: 2,
    title: "Blog-Backend",
    description: "backend add card multiples users and login signup data.",
    githubLink: "https://github.com/mohib204/Blog-App-backend.git"
  },
];

const Work = () => {
  return (
    <div className="work">
      <div className="work-container">
        <h1>My Work</h1>
        <div className="work-grid">
          {workData.map((work) => (
            <div key={work.id} className="work-card">
              <div className="work-details">
                <h2>{work.title}</h2>
                <p>{work.description}</p>
                <div className="work-links">
                  <a href={work.githubLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
