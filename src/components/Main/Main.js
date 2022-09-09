import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Promo from '../Promo/Promo';

const Main = () => {
  return (
    <>
      <Header>
        <ul className="header__auth">
          <li className="auth">
            <Link className="auth__link" to="sign-up">Регистрация</Link></li>
          <li className="auth">
            <Link className="auth__link auth__link_color_green" to="sign-in">Войти</Link>
          </li>
        </ul>
      </Header>
      <Promo />
    </>

  );
};

export default Main;