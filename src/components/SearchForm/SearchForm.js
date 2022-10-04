import React, { useEffect } from 'react';
import './SearchForm.css';
import { useForm } from 'react-hook-form';

const SearchForm = ({ isChecked, onSubmit, handleToggle, searchValue }) => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    mode: 'onSubmit'
  });

  useEffect(() => {
    setValue('search', searchValue);
  }, [ searchValue ]);

  return (
    <section className="search-form">
      <form name="search" className="search-form__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="search-form__label">
          <input
            id="search"
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            {...register('search', {
              required: {
                value: true,
                message: 'Нужно ввести ключевое слово'
              },
            })}/>
          <span className="search-form__error">{errors.search?.message}</span>
        </label>
        <button className="search-form__button" type="submit">Найти</button>
      </form>
      <div className="search-form__switch">
        <input
          className={isChecked ? 'switch__checkbox switch__checkbox_checked' : 'switch__checkbox'}
          onChange={handleToggle}
          type="checkbox"
          id="switch"
          checked={isChecked}
          required/>
        <label htmlFor="switch" className="switch__title">Короткометражки</label>
      </div>
    </section>);
};

export default SearchForm;