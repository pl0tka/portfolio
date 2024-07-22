import React from 'react';

function Nav({ isShown, onClose }) {
  const navClassShow = isShown ? 'nav-show' : '';

  // smooth scrolling to the correct section with improved offset height
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const navHeight = 15;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
    // remove focus from the element
    e.target.blur();
    // close nav
    onClose();
  };

  return (
    <nav className={`nav ${navClassShow}`}>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="#" onClick={(e) => handleClick(e, 'about')}>
            about me
          </a>
        </li>
        <li className="nav-list-item">
          <a href="#" onClick={(e) => handleClick(e, 'projects')}>
            my projects
          </a>
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
