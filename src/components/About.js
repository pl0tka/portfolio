import React from 'react';
import technologies from '../data/aboutTechnologies';

function About() {
  const lastItem = technologies.length - 1;
  const renderedTechnologies = technologies.map((item, index) =>
    index === lastItem ? (
      <span key={index}>{item}</span>
    ) : (
      <span key={index}>{item} | </span>
    )
  );

  return (
    <section id="about" className="section">
      <h2 className="section-title">about me</h2>
      <div className="about">
        <p>
          My coding journey began two years ago during an internship in a Fraud
          team where I picked up SQL. That experience hooked me on programming!
          😍 I started with front-end technologies, then moved on to back-end
          development to become a well-rounded full-stack developer. I’m a
          curious, friendly, and motivated person who loves creating beautiful
          things and exploring new technologies. Now, I’m looking forward to my
          next adventure as a full-stack developer.
        </p>
        <p className="about-tech-stack">
          <span className="about-accent">My tech stack: </span>
          {renderedTechnologies}
        </p>
      </div>
    </section>
  );
}

export default About;
