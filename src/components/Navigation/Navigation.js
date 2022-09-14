import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import account from '../../images/account.svg';

const classActive = ({ isActive }) => `link ${isActive ? 'navigation__link_active' : ''}`;

const Navigation = ({ navigationActive, navigationButtonClass, isOpen }) => {

  return (
    <>
      <div className={navigationButtonClass} onClick={isOpen}>
        <span className="header__navigation-button_span"/>
      </div>
      {navigationActive && <div className="navigation_bg"/>}
      <nav className={navigationActive ? 'header__navigation active' : 'header__navigation'}>
        <ul className="navigation__list">
          {navigationActive &&
            <li className="navigation__item">
              <NavLink onClick={isOpen} to="/" className={classActive}>Главная</NavLink>
            </li>}
          <li className="navigation__item">
            <NavLink onClick={isOpen} to="/movies" className={classActive}>Фильмы</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink onClick={isOpen} to="/saved-movies" className={classActive}>Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <Link onClick={isOpen} className="account__link" to="/account">Аккаунт<img className="account__image" src={account}
                                                                  alt="Аккаунт"/></Link>
      </nav>
    </>

  );
};

export default Navigation;
