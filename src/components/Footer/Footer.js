import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__content">
        <div className="footer__copyright">&copy; 2020</div>
        <nav className="footer__navigation">
          <ul className="footer__links">
            <li><a href="#" className="footer__link link">Яндекс.Практикум</a></li>
            <li><a href="#" className="footer__link link">Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;