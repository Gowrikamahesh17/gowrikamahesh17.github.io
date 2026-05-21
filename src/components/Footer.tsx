import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/gowrika-mahesh-092873215" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built with the <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">react-portfolio-template</a> by <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">Yuji Sato</a> 💜</p>
    </footer>
  );
}

export default Footer;