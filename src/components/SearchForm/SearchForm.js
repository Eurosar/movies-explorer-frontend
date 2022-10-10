import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import { useForm } from 'react-hook-form';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { DURATION_OF_SHORT_MOVIES } from '../../utils/constants';

const SearchForm = ({
                      movies,
                      cards,
                      setCards,
                      isChecked,
                      setIsChecked,
                      onSubmit,
                      searchValue,
                      setSearchValue,
                      moviesLocalStorage,
                      searchValueLocalStorage,
                      savedMoviesPage
                    }) => {

  const { changeValue, setChangeValue } = useCurrentUser();
  const [ disabledSwitch, setDisabledSwitch ] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    mode: 'onSubmit'
  });

  const onChangeSearch = (data) => {
    setChangeValue(data.target.value);
  };

  /**
   * Функция переключения свича короткометражек
   */
  const handleToggle = () => {
    setIsChecked(isChecked => !isChecked);
    localStorage.setItem('switch', JSON.stringify(!isChecked));

    if (searchValue === changeValue) {
      if (!isChecked) {
        setCards(cards.filter(card => card.duration < DURATION_OF_SHORT_MOVIES));
      } else {
        setCards(JSON.parse(localStorage.getItem(`${moviesLocalStorage}`)));
      }
    } else {
      let searchResult = movies.filter((movie) => movie.nameRU.toLowerCase().includes(changeValue.toLowerCase()));
        localStorage.setItem(`${moviesLocalStorage}`, JSON.stringify(searchResult));
      if (!isChecked) {
        searchResult = searchResult.filter((movie) => movie.duration < DURATION_OF_SHORT_MOVIES);
      }
      setCards([ ...searchResult ]);
      setSearchValue(changeValue);
      localStorage.setItem(`${searchValueLocalStorage}`, JSON.stringify(changeValue));
    }
  };

  useEffect(() => {
    setChangeValue(searchValue);
    setValue('search', searchValue);
  }, [ searchValue ]);

  useEffect(() => {
    if (!changeValue && !savedMoviesPage) {
      setDisabledSwitch(true);
    } else {
      setDisabledSwitch(false);
    }
  }, [ changeValue ]);
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
              onChange: onChangeSearch
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
          disabled={disabledSwitch}
          required/>
        <label htmlFor="switch" className="switch__title">Короткометражки</label>
      </div>
    </section>);
};

export default SearchForm;