import React from 'react';

function Project({ project }) {
  const { title, desc, techlonogies, img, projectLink, githubLink } = project;

  const renderedTechnologies = techlonogies.map((item, index) => (
    <span className="project-technology" key={index}>
      {item}
    </span>
  ));

  // remove focus from the element
  const handleClick = (e) => {
    e.target.blur();
  };

  return (
    <article className="project">
      <div className="project-image-wrapper">
        <img className="project-image" src={img} alt={title} />
      </div>
      <div className="project-info-wrapper">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{desc}</p>
        <p className="project-tech-stack">
          Technologies:
          {renderedTechnologies}
        </p>
      </div>
      <div className="project-btns-wrapper">
        {/* add tabindex to enable selecting of links only */}
        <button className="project-btn" tabIndex="-1">
          <a href={projectLink} target="_blank" onClick={handleClick}>
            visit site
          </a>
        </button>
        {/* add tabindex to enable selecting of links only */}
        <button className="project-btn" tabIndex="-1">
          <a href={githubLink} target="_blank" onClick={handleClick}>
            github repo
          </a>
        </button>
      </div>
    </article>
  );
}

export default Project;
