import React from 'react';
import { FaBars } from 'react-icons/fa6';

function NavToggler({ onToggle, isShown }) {
  const handleClick = () => {
    onToggle(!isShown);
  };

  return (
    <button onClick={handleClick} className="header-toggler">
      <FaBars className="header-toggler-icon" />
    </button>
  );
}

export default NavToggler;
