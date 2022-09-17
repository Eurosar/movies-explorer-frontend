import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>
      <Header>
        <ul className="header__auth">
          <li className="header__auth-item">
            <Link className="auth-item__link" to="/signup">Регистрация</Link></li>
          <li className="header__auth-item">
            <Link className="auth-item__link auth-item__link_color_green" to="/signin">Войти</Link>
          </li>
        </ul>
      </Header>
      <main className="content">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
      <Footer/>
    </>

  );
};

export default Main;