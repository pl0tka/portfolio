import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  // remove focus from the button
  const handleClick = (e) => {
    e.currentTarget.blur();
  };

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          className="footer-link"
          href="https://github.com/pl0tka"
          target="_blank"
          onClick={handleClick}
        >
          <FaGithub />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/anastasiahuseva/"
          target="_blank"
          onClick={handleClick}
        >
          <FaLinkedin />
        </a>
        <a
          className="footer-link"
          href="mailto:huseva.a@gmail.com"
          target="_blank"
          onClick={handleClick}
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-info">Nasta Huseva | &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
