import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header({ children }) {
  return (
    <header className="header">
      <Link to="/"><img className="header__logo" src={logo} alt="Логотип"/></Link>
      {children}
    </header>
  );
}

export default Header;