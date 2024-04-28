import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="#about">about me</a>
        </li>
        <li className="nav-list-item">
          <a href="#projects">my projects</a>
        </li>
        <li className="nav-list-item">
          <a className="nav-link-contact" href="mailto:huseva.a@gmail.com">
            get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
