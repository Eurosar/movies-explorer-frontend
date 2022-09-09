import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <ul className="nav__links">
      <a  className="nav__link link" href="#1">
        <li>О проекте</li>
      </a>
      <a  className="nav__link link" href="#2">
        <li>Технологии</li>
      </a>
      <a  className="nav__link link" href="#3">
        <li>Студент</li>
      </a>
    </ul>
  );
};

export default NavTab;