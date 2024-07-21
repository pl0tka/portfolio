import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">about me</h2>
      <div className="about">
        <p>
          My coding journey began two years ago during an internship in a Fraud
          team where I picked up SQL. That experience hooked me on programming,
          and I've been learning it ever since. I’m a curious, friendly, and
          motivated person who loves creating beautiful things and exploring new
          technologies. Now, I’m looking forward to my next adventure as a
          full-stack developer.
        </p>
        <p className="about-tech-stack">
          <span className="about-accent">My tech stack: </span>
          JavaScript | React | Node.js | Express | MongoDB | HTML5 | CSS3 | Sass
          | styled-components | Tailwind | Bulma
        </p>
      </div>
    </section>
  );
}

export default About;
