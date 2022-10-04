import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

function Header() {

  const { loggedIn } = useCurrentUser();

  return (
    <header className="header">
      <Link to="/"><img className="header__logo" src={logo} alt="Логотип"/></Link>
      {loggedIn
        ? <Navigation/>
        :
        <ul className="header__auth">
          <li className="header__auth-item">
            <Link className="auth-item__link" to="/signup">Регистрация</Link></li>
          <li className="header__auth-item">
            <Link className="auth-item__link auth-item__link_color_green" to="/signin">Войти</Link>
          </li>
        </ul>}
    </header>
  );
}

export default Header;