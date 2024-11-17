import React from "react";
import "./projets.css";

const projectsData = [
    { 
      id: "secureVault",
      title: "SecureVault",
      description: "A C# password manager application for securely storing passwords.",
      image: "https://i.imgur.com/oZ5Qtpc.jpeg", 
      link: "https://github.com/your-username/pokedex",
      tech: ["C#,MongoDB"]
    },
    {
      id: "stockPrediction",
      title: "StockPrediction",
      description: "A python project to predict stock's price in the real world.",
      image: "https://imgs.search.brave.com/ZvcVVq7RuS9qzIyOdhX-ienN_7_-XcyU035FbSCOLX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY0/NTkyNjMwNS9waG90/by9zdG9jay1leGNo/YW5nZS1jaGFydC1v/bi10aGUtc2NyZWVu/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1m/RDY1SlJIRjZDMGo0/am5WN2wxR2pEQTYt/em9iU2ZiNkF3N0VB/YkNFVGtNPQ", 
      link: "https://github.com/danmschaffer/stocksAgents/tree/main",
      tech: ["Python,ChatGPT-4,Streamlit"]
    },
    {
      id: "employeeOrganizer",
      title: "Employee's Organizer",
      description: "A python project to provide organization for your employees info.",
      image: "https://imgs.search.brave.com/Lb5CxH8TN2qhUvp-rrc5-qu0py0yfJWBaQZAQhK5yiI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzIxLzIxLzA3/LzM2MF9GXzkyMTIx/MDc1N18xVWU1TlY4/UEZMUUltazlsTldO/ZlpXMjh4WTJ6VGF1/Zi5qcGc", 
      link: "https://github.com/your-username/library-storage",
      tech: ["Python,MongoDB"]
    }
  ];
  
  const Projects = () => {
    return (
      <section className="projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Projects;