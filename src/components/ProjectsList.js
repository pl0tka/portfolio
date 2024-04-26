import screenshot1 from '../img/screen-1.png';
import screenshot2 from '../img/screen-2.png';
import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project Title 1',
    desc: 'Description of the project blabla what a beautiful project',
    techlonogies: 'HTML, CSS, JavaScript',
    img: screenshot1,
    projectLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Title 2',
    desc: 'Here goes some info',
    techlonogies: 'HTML, CSS (Sass), JavaScript',
    img: screenshot2,
    projectLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Title 3',
    desc: 'Here is one more project lorem lorem loremfdsnkl fds arosnd',
    techlonogies: 'HTML, CSS, JavaScript, React',
    img: screenshot1,
    projectLink: '#',
    githubLink: '#',
  },
];

function ProjectsList() {
  const renderedProjects = projects.map((project, index) => {
    return <Project key={index} project={project} />;
  });

  return (
    <section id="projects" className="section section-projects">
      <div className="section-container">
        <h2 className="section-title">My projects</h2>
        <div className="projects-container">{renderedProjects}</div>
      </div>
    </section>
  );
}

export default ProjectsList;
