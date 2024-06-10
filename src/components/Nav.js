import React, { useState, useEffect } from 'react';

function Nav({ isShown }) {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // create a media query listener for screen widths at least 768px
    const mediaWatcher = window.matchMedia('(min-width: 768px)');
    // update the state based on the media query match
    const updateIsWideScreen = (e) => {
      setIsWideScreen(e.matches);
    };

    mediaWatcher.addEventListener('change', updateIsWideScreen);
    // set the initial state based on the current screen width
    updateIsWideScreen(mediaWatcher);

    return () => {
      mediaWatcher.removeEventListener('change', updateIsWideScreen);
    };
  }, []);

  const navClassShow = isShown && !isWideScreen ? 'nav-show' : '';

  return (
    <nav className={`nav ${navClassShow}`}>
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
