import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = () => {
  const items = [
    {
      content: <a className="link link__main-promo" href="#about-project">О проекте</a>,
      style: 'main-promo'
    },
    {
      content: <a className="link link__main-promo" href="#tech">Технологии</a>,
      style: 'main-promo'
    },
    {
      content: <a className="link link__main-promo" href="#about-me">Студент</a>,
      style: 'main-promo'
    },
  ];
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav>
        <NavTab items={items}/>
      </nav>
    </section>
  );
};

export default Promo;