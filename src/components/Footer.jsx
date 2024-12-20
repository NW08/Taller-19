import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_title">Derechos reservados - Grupo 03</p>
      <div className="footer__buttons">
        <img src="./src/images/Facebook.png" alt="Facebook" loading="lazy" />
        <img src="./src/images/instagram.png" alt="Instagram" loading="lazy" />
        <img src="./src/images/x.png" alt="X" loading="lazy" />
      </div>
    </footer>
  );
};

export default Footer
