import React from 'react';
import './Portfolio.css';
import diagonalArrow from '../../images/diagonal-arrow.svg';

const Portfolio = () => {
  return (
    <nav className="about-me__portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__item"><a className="portfolio__link link"
                                           href="https://eurosar.github.io/how-to-learn/" target="_blank">Статичный сайт<img
          className="portfolio__link-image" src={diagonalArrow} alt="Перейти"/></a></li>
        <li className="portfolio__item"><a className="portfolio__link link"
                                           href="https://eurosar.github.io/russian-travel" target="_blank">Адаптивный
                                                                                                           сайт<img
            className="portfolio__link-image" src={diagonalArrow} alt="Перейти"/></a></li>
        <li className="portfolio__item"><a className="portfolio__link link"
                                           href="https://eurosar.mesto.nomoredomains.sbs" target="_blank">Одностраничное
                                                                                                          приложение<img
            className="portfolio__link-image" src={diagonalArrow} alt="Перейти"/></a></li>
      </ul>
    </nav>
  );
};

export default Portfolio;