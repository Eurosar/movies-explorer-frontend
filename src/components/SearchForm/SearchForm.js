import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {

  const [ isChecked, setIsChecked ] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="search-form">
      <form name="search" className="search-form__form">
        <label className="search-form__label">
          <input className="search-form__input" type="text" placeholder="Фильм"/>
        </label>
        <button className="search-form__button" type="submit">Найти</button>
      </form>
      <div className="search-form__switch">
        <input
          className={isChecked ? 'switch__checkbox switch__checkbox_checked' : 'switch__checkbox'}
          onChange={handleToggle}
          type="checkbox"
          id="switch"/>
        <label htmlFor="switch" className="switch__title">Короткометражки</label>
      </div>
    </section>
  );
};

export default SearchForm;