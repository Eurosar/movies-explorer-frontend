import React, { useEffect, useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Movies = () => {

  const { movies, onRenderLoading, isLoading } = useCurrentUser();

  const [ isCheckedSwitch, setIsCheckedSwitch ] = useState(false);
  const [ cards, setCards ] = useState([]);
  const [ searchValue, setSearchValue ] = useState(null);

  /**
   * Функция переключения свича короткометражек
   */
  const handleToggle = () => {
    setIsCheckedSwitch(isCheckedSwitch => !isCheckedSwitch);
    if (searchValue.length) {
      localStorage.setItem('switch', JSON.stringify(!isCheckedSwitch));
      if (!isCheckedSwitch) {
        setCards(cards.filter(card => card.duration < 40));
      } else {
        setCards(JSON.parse(localStorage.getItem('movies')));
      }
    }
  };

  /**
   * Функция определения короткометражек
   * @param movie
   * @returns {boolean}
   */
  function shortMovies(movie) {
    return movie.duration < 40;
  }

  /**
   * Найдем фильмы
   * @param data
   */
  function handleSearch(data) {

    /**
     * Отфильтруем фильмы
     * @param movie
     * @returns {boolean}
     */
    function filterMovies(movie) {
      return movie.nameRU.toLowerCase().includes(data.search.toLowerCase());
    }

    onRenderLoading(true);
    let searchResult = movies.filter(filterMovies);
    if (searchResult.length) {
      localStorage.setItem('movies', JSON.stringify(searchResult));
    }
    if (isCheckedSwitch) {
      searchResult = searchResult.filter(shortMovies);
    }
    setCards([ ...searchResult ]);
    setSearchValue(data.search);
    localStorage.setItem('searchValue', JSON.stringify(data.search));
    if (!localStorage.switch) {
      localStorage.setItem('switch', JSON.stringify(isCheckedSwitch));
    }
    onRenderLoading(false);
  }

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('searchValue'));
    if (value) {
      setSearchValue(value);
    }

    const isShort = JSON.parse(localStorage.getItem('switch'));
    if (isShort) {
      setIsCheckedSwitch(isShort);
    }

    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    if (localStorageMovies) {
      if (isShort) {
        setCards(localStorageMovies.filter(shortMovies));
      } else {
        setCards(localStorageMovies);
      }
    }

  }, []);

  return (
    <>
      <Header/>
      <main className="content">
        <SearchForm
          isChecked={isCheckedSwitch}
          searchValue={searchValue}
          onSubmit={handleSearch}
          handleToggle={handleToggle}
        />

        {cards.length ?
          <MoviesCardList
            cards={cards}
            hideFavorite={false}
          />
          : searchValue && !cards.length
            ? <p className="movies__not-found">Ничего не найдено</p>
            : ''}
        {isLoading && <Preloader/>}
      </main>
      <Footer/>
    </>
  );
};

export default Movies;
