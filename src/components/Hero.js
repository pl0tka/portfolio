import React from 'react';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Hi, my name is Nasta
          <span className="waving-hand">&#128075;&#65039;</span>
        </h1>
        <h2 className="hero-subtitle">
          I'm a <strong className="hero-accent">front-end developer</strong>{' '}
          living in Warsaw
        </h2>
      </div>
    </header>
  );
}

export default Hero;
