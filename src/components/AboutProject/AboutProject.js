import React from 'react';
import './AboutProject.css';
import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';

const AboutProject = () => {
  return (
    <section id="about-project" className="about-project">
      <MainSectionTitle title="О проекте" />
      <ul className="about-project__content">
        <li className="about-project__stage">
          <h3 className="stage__title">Дипломный проект включал 5 этапов</h3>
          <p className="stage__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
                                     финальные доработки.</p>
        </li>
        <li className="about-project__stage">
          <h3 className="stage__title">На выполнение диплома ушло 5 недель</h3>
          <p className="stage__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
                                     успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__diagram">
        <div className="diagram__stage">
          <div className="diagram__time diagram__time_color_green">1 неделя</div>
          <div className="diagram__about">Back-end</div>
        </div>
        <div className="diagram__stage">
          <div className="diagram__time">4 недели</div>
          <div className="diagram__about">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;