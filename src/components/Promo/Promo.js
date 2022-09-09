import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="promo__nav">
        <NavTab />
      </nav>
    </section>
  );
};

export default Promo;