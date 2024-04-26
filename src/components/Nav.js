import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <p className="nav-logo">huseva</p>
        <ul className="nav-list">
          <li className="nav-link">
            <a href="#about">about me</a>
          </li>
          <li className="nav-link">
            <a href="#projects">my projects</a>
          </li>
          <li className="nav-link">
            <a className="nav-link-contact" href="mailto:huseva.a@gmail.com">
              get in touch
            </a>
          </li>
        </ul>
        <button className="nav-toggler">
          <i className="togger-icon fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
