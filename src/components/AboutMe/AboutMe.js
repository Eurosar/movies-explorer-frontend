import React from 'react';
import './AboutMe.css';
import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';
import student from '../../images/student.jpg';
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me">
      <MainSectionTitle title="Студент"/>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__name">Сергей</h3>
          <div className="about-me__about">Фронтенд-разработчик, 35 лет</div>
          <div className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
                                                 есть
                                                 жена
                                                 и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
                                                 кодить. С
                                                 2015 года работал в компании «СКБ Контур». После того, как прошёл курс
                                                 по
                                                 веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной
                                                 работы.
          </div>
          <a className="about-me__github link" href="https://github.com/Eurosar" target="_blank">Github</a>
        </div>
        <img className="about-me__photo" src={student} alt="Сергей"/>
      </div>
      <Portfolio/>
    </section>
  );
};

export default AboutMe;