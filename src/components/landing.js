import React from 'react';
import './landing.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Landing = () => {
  return (
    <section className="landing">
      <div className="content">
        {/* Profile Image */}
        <div className="my-picture">
          <img 
            src="https://i.imgur.com/pmEITC5.jpeg" 
            alt="Daniel Schaffer" 
            className="profile-image" 
          />
        </div>
        
        {/* Typing SVG */}
        <div className="typing">
          <img
            src="https://readme-typing-svg.demolab.com?font=Roboto&pause=1000&color=FFFFFF&center=true&vCenter=true&width=435&lines=Welcome+!;I'm+Daniel+Schaffer;Graduated+at+Seneca+College;Toronto%2C+Ontario"
            alt="Typing animation"
            className="typing-svg"
          />
        </div>

        <p>Software Developer | Python | C++ | .NET | React </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/danielmschaffer/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/danmschaffer" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:danmschaffer@outlook.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <a href="/projects" className="cta-button">Check My Work</a>
      </div>
    </section>
  );
};

export default Landing;
