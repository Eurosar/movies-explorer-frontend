import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__subtitle">Страница не найдена</p>
      <Link to="/" className="not-found-page__link link">Назад</Link>
    </section>
  );
};

export default NotFoundPage;