import React from 'react';

function Project({ project }) {
  const { title, desc, techlonogies, img, projectLink, githubLink } = project;

  return (
    <article className="project">
      <div className="project-image-wrapper">
        <img className="project-image" src={img} alt={title} />
      </div>
      <div className="project-info-wrapper">
        <h3 className="project-title">{title}</h3>
        <p>{desc}</p>
        <p>Technologies used: {techlonogies}</p>
      </div>
      <div className="project-btns-wrapper">
        <button className="btn project-btn">
          <a href={projectLink} target="_blank">
            visit site
          </a>
        </button>
        <button className="btn project-btn">
          <a href={githubLink} target="_blank">
            github repo
          </a>
        </button>
      </div>
    </article>
  );
}

export default Project;
