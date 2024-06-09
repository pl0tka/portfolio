import React from 'react';

function NavToggler({ onToggle, isShown }) {
  const handleClick = () => {
    onToggle(!isShown);
  };

  return (
    <button onClick={handleClick} className="header-toggler">
      <i className="header-toggler-icon fa-solid fa-bars"></i>
    </button>
  );
}

export default NavToggler;
