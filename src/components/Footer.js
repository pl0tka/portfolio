import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          className="footer-link"
          href="https://github.com/pl0tka"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/anastasiahuseva/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="footer-link"
          href="mailto:huseva.a@gmail.com"
          target="_blank"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-info">Nasta Huseva | &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
