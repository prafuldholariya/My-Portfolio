import React from 'react';
import './Projects.css';


const Projects = ({isDarkMode}) => {
  const projectData = [
    {
      id: 'project1',
      tech: 'Python, SQL, MongoDB, React',
      github: 'https://github.com/prafuldholariya/Ecommerce-Website',
      title: 'Dynamic Learning Platform',
      description:
        'Developed a dynamic educational web application using React with a function-component-based architecture, improving scalability and reducing development time by 20%. Implemented responsive design and React hooks, ensuring accessibility across all devices and enhancing user interaction.',
    },
    {
      id: 'project2',
      tech: 'Python, React, SQL, FastAPI',
      github: 'https://github.com/prafuldholariya/Codeforces-Dashboard',
      title: 'Coding Performance Hub',
      description:
        'Developed an interactive dashboard to aggregate and visualize Codeforces data, optimizing performance by 30% through backend integration. Enhanced data accuracy and user engagement by 25% with graphical insights, ensuring scalability for future platform integrations.',
    },
    {
      id: 'project3',
      tech: 'Python, SQL, MongoDB, Django, DRF',
      github: 'https://prafuldholariya.github.io/Ecommerce-Website/index.html',
      title: 'Interactive Shopping Website',
      description:
        'Developed a user-friendly eCommerce platform with seamless navigation and interactive features, boosting user productivity by 30%. Optimized performance and responsiveness, ensuring accessibility across all devices for an enhanced shopping experience.',
    },
  ];

  return (
    <div id="project-container" className="flex-both-center" data-theme = {isDarkMode ? "dark" : "light"}>
      <div id="project-container2" className="fade-border">
        <p>Some of my works</p>
        <h1>PROJECTS</h1>
        <div id="project-list" className="flex-space-evenly">
          {projectData.map((project) => (
            <div key={project.id} id={project.id} className="project">
              <div className="project-about">
                <div className='project-top'>
                <span aria-hidden="true"><i className="bx bx-folder red"></i></span>
                  <div className='github-demo'>
                    <a href={project.github} aria-label='project-demo'><i class='bx bx-link-external' ></i></a>
                    <a href={project.github} aria-label='github-Repo'><i class='bx bxl-github'></i></a>
                  </div>
                </div>
                <div className='project-title'>
                  <h3>{project.title}</h3>
                </div>
                <div className='project-desc'>
                  <h4>{project.description}</h4>
                </div>
                <div className='project-tech-stack'>
                  <h5>{project.tech}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
