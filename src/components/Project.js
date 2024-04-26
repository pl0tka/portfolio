import React from 'react';

function Project({ project }) {
  const { title, desc, techlonogies, img, projectLink, githubLink } = project;

  return (
    <article className="project">
      <div className="image-wrapper">
        <img src={img} alt={title} />
      </div>
      <h3 className="project-title">{title}</h3>
      <p>{desc}</p>
      <p>Technologies used: {techlonogies}</p>
      <div className="project-btns">
        <button className="btn project-btn">
          <a href={projectLink}>Check it out</a>
        </button>
        <button className="btn project-btn">
          <a href={githubLink}>GitHub Repo</a>
        </button>
      </div>
    </article>
  );
}

export default Project;
