import React from 'react';
import Nav from './Nav';
import NavToggler from './NavToggler';
import { useState, useEffect } from 'react';

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // create a media query listener for screen widths at least 768px
    const mediaWatcher = window.matchMedia('(min-width: 768px)');
    // update the state based on the media query match
    const updateIsWideScreen = (e) => {
      setIsWideScreen(e.matches);
      setShowNav(false);
    };

    mediaWatcher.addEventListener('change', updateIsWideScreen);
    // set the initial state based on the current screen width
    updateIsWideScreen(mediaWatcher);

    return () => {
      mediaWatcher.removeEventListener('change', updateIsWideScreen);
    };
  }, []);

  const toggleNav = (isShown) => {
    setShowNav(isShown);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <header className="header">
      <div className="header-logo-toggler">
        <p className="header-logo">huseva</p>
        <NavToggler onToggle={toggleNav} isShown={showNav} />
      </div>
      <Nav isShown={showNav} onClose={closeNav} />
    </header>
  );
}

export default Header;
