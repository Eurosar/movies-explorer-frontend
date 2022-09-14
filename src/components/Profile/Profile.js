import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Profile = ({navigationActive, navigationButtonClass,openNavigation}) => {
  return (
    <>
      <Header>
        <Navigation
          navigationActive={navigationActive}
          navigationButtonClass={navigationButtonClass}
          isOpen={openNavigation}
        />
      </Header>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <ul className="profile__list">
          <li className="profile__item">
            <p className="profile__item-text">Имя</p>
            <p className="profile__item-text">Виталий</p></li>
          <li className="profile__item">
            <p className="profile__item-text">E-mail</p>
            <p className="profile__item-text">pochta@yandex.ru</p></li>
        </ul>
          <button className="profile__button" type="button">Редактировать</button>
          <Link to="/sign-in" className="profile__link link">Выйти из аккаунта</Link>
      </section>
    </>
  );
};

export default Profile;