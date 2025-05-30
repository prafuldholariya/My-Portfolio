import React, { useState } from 'react';
import aboutPic from '../../img/about-pic.jpg';
import azure_img from '../../img/azure logo.png';
import bootstrap_img from '../../img/Bootstrap logo.png';
import css_img from '../../img/CSS logo.png';
import docker_img from '../../img/docker logo.png';
import html_img from '../../img/html logo.png';
import js_img from '../../img/javascript logo.png';
import mongo_img from '../../img/mongodb logo.png';
import python_img from '../../img/python-logo.png';
import react_img from '../../img/React_logo.png';
import sql_img from '../../img/sql logo.png';
import './About.css';

const About = ({ isDarkMode }) => {
  const [images] = useState([
    python_img,
    mongo_img,
    sql_img,
    azure_img,
    docker_img,
    react_img,
    bootstrap_img,
    css_img,
    js_img,
    html_img,
  ]);
  return (
    <div id="about-container" className="flex-both-center" data-theme={isDarkMode ? "dark" : "light"}>
      <div id="about-container2" className="fade-border flex-space-evenly">
        <div id="about-pic">
          <img src={aboutPic} alt="profile-pic" />
        </div>
        <div id="about-about">
          <h1>
            About <span className="red">Me</span>
          </h1>
          <p>
            <section id="about-me">
              <p>
                Hi, my name is <strong>Praful Dholariya</strong>, and I’m a <strong>Python Software Engineer</strong> with a strong passion for building efficient, scalable, and reliable software solutions.
              </p>
              <p>
                I specialize in <strong>Python development</strong>, working across various domains including <em>web development</em>, <em>automation</em>, and <em>data processing</em>. I'm particularly interested in writing clean, maintainable code and continuously improving both my technical skills and development processes.
              </p>
            </section>
          </p>
          <h4 id="skills-btn">Tech Stack</h4>
          <div className='tech-stack'>
            {images.map((image, index) => (
              <div key={index} className={`delay${index + 1}`}>
                <img src={image} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
