import React from 'react';
import Project from './Project';
import projects from '../data/projects';

function ProjectsList() {
  const renderedProjects = projects.map((project, index) => {
    return <Project key={index} project={project} />;
  });

  return (
    <section id="projects" className="section">
      <h2 className="section-title">my projects</h2>
      <div className="projects">{renderedProjects}</div>
    </section>
  );
}

export default ProjectsList;
