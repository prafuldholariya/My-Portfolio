import React from 'react';
import profileImg from '../../img/profile-pic.jpg';
import resume from '../../img/Resume.pdf';
import './Home.css';

const Home = ({isDarkMode}) => {
  return (
    <div id="front-container" className="flex-space-evenly" data-theme={isDarkMode}>
      <div id="profile-pic" className="fade-border">
        <img src={profileImg} alt="Profile" />
      </div>
      <div id="profile-content">
        <h1>
          Hi, I am <span className="red">Praful Dholariya</span>
        </h1>
        <h4>A Python Software Engineer</h4>
        <p>
          Passionate Python software engineer with a strong background in building robust and scalable applications. Experienced in developing solutions that solve real-world problems and drive business value.
        </p>
        <a href={resume} download="Resume-PrafulDholariya">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
