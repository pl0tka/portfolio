import React, { useRef } from 'react';
import { FaBars } from 'react-icons/fa6';

function NavToggler({ onToggle, isShown }) {
  const togglerRef = useRef(null);

  const handleClick = () => {
    onToggle(!isShown);
    // remove focus from the toggler button if it is currently focused
    if (togglerRef.current && isShown) {
      togglerRef.current.blur();
    }
  };

  return (
    <button onClick={handleClick} className="header-toggler" ref={togglerRef}>
      <FaBars className="header-toggler-icon" />
    </button>
  );
}

export default NavToggler;
