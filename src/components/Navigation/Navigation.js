import React, { useState } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import account from '../../images/account.svg';

const classActive = ({ isActive }) => `link ${isActive ? 'navigation__link_active' : ''}`;

const Navigation = () => {

  const [navigationActive, setNavigationActive] = useState(false);
  const [navigationButtonClass, setNavigationButtonClass] = useState("header__navigation-button");

  const openNavigation = () => {
    if (!navigationActive) {
      setNavigationButtonClass("header__navigation-button header__navigation-button_clicked");
    }
    else {
      setNavigationButtonClass("header__navigation-button");
    }
    setNavigationActive(!navigationActive);
  }

  return (
    <>
      <div className={navigationButtonClass} onClick={openNavigation}>
        <span className="header__navigation-button_span"/>
      </div>
      {navigationActive && <div className="navigation_bg"/>}
      <nav className={navigationActive ? 'header__navigation active' : 'header__navigation'}>
        <ul className="navigation__list">
          {navigationActive &&
            <li className="navigation__item">
            <NavLink to="/" className={classActive}>Главная</NavLink>
          </li>}
          <li className="navigation__item">
            <NavLink to="/movies" className={classActive}>Фильмы</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/saved-movies" className={classActive}>Сохранённые фильмы</NavLink>
          </li>
        </ul>
        <Link className="account__link" to="/account">Аккаунт<img className="account__image" src={account} alt="Аккаунт"/></Link>
      </nav>
    </>

  );
};

export default Navigation;
