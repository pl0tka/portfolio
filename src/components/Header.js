import React from 'react';
import Nav from './Nav';
import NavToggler from './NavToggler';
import { useState } from 'react';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = (isShown) => {
    setShowNav(isShown);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-toggler">
          <p className="header-logo">huseva</p>
          <NavToggler onToggle={toggleNav} isShown={showNav} />
        </div>
        <Nav isShown={showNav} />
      </div>
    </header>
  );
}

export default Header;
