import React from 'react';
import Nav from './Nav';
import NavToggler from './NavToggler';

function Header() {
  return (
    <header className="header">
      <p className="header-logo">huseva</p>
      <Nav />
      <NavToggler />
    </header>
  );
}

export default Header;
