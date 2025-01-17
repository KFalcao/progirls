import React from 'react';
import { FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import './style.css'; 

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.instagram.com/comunidade_progirls" target="_blank" rel="noopener noreferrer">
        <FiInstagram className="icon instagram" />
      </a>
      <a href="https://www.linkedin.com/groups/10008515/" target="_blank" rel="noopener noreferrer">
        <TiSocialLinkedinCircular className="icon linkedin" />
      </a>
      <a href="https://github.com/Programmer-Girls" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon github" />
      </a>
      <a href="https://www.youtube.com/c/Programmer-Girls" target="_blank" rel="noopener noreferrer">
        <FiYoutube className="icon youtube" />
      </a>
    </div>
  );
};

export default SocialIcons;
