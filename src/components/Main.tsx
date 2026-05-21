import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/Gowrikamahesh17" alt="Gowrika Mahesh" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gowrika-mahesh-092873215" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Gowrika Mahesh</h1>
          <p>Data Analytics & AI | Agentic AI | GenAI Systems</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gowrika-mahesh-092873215" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;