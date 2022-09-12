import React from 'react';
import './Techs.css';
import MainSectionTitle from '../MainSectionTitle/MainSectionTitle';
import NavTab from '../NavTab/NavTab';

const Techs = () => {
  const items = [
    {
      content: 'HTML',
      style: 'main-tech'
    },
    {
      content: 'CSS',
      style: 'main-tech'
    },
    {
      content: 'JS',
      style: 'main-tech'
    },
    {
      content: 'React',
      style: 'main-tech'
    },
    {
      content: 'Git',
      style: 'main-tech'
    },
    {
      content: 'Express.js',
      style: 'main-tech'
    },
    {
      content: 'mongoDB',
      style: 'main-tech'
    },
  ];
  return (
    <section id="tech" className="techs">
      <MainSectionTitle title="Технологии"/>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                                     проекте.</p>
      <NavTab blockNameStyles="techs" items={items}/>
    </section>
  );
};

export default Techs;