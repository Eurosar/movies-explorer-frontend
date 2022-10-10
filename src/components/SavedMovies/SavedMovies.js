import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { DURATION_OF_SHORT_MOVIES } from '../../utils/constants';

const SavedMovies = () => {

  const { favoriteMovies, onRenderLoading, isLoading } = useCurrentUser();

  const [ myCards, setMyCards ] = useState([]);

  const [ isCheckedSwitchBySavedMovies, setIsCheckedSwitchBySavedMovies ] = useState(false);
  const [ searchFavoriteMoviesValue, setSearchFavoriteMoviesValue ] = useState('');

  function shortMovies(movie) {
    return movie.duration < DURATION_OF_SHORT_MOVIES;
  }

  /**
   * Функция поиска фильмов
   * @param data
   */
  function handleSearch(data) {

    function filterMovies(favoriteMovies) {
      return favoriteMovies.nameRU.toLowerCase().includes(data.search.toLowerCase());
    }

    onRenderLoading(true);
    let searchResult = favoriteMovies.filter(filterMovies);
      localStorage.setItem('favoriteMovies', JSON.stringify(searchResult));
    if (isCheckedSwitchBySavedMovies) {
      searchResult = searchResult.filter(shortMovies);
    }
    setMyCards([ ...searchResult ]);
    setSearchFavoriteMoviesValue(data.search);
    onRenderLoading(false);
  }

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    setMyCards(favoriteMovies);
  }, [ favoriteMovies ]);

  return (
    <>
      <Header/>
      <main className="content">
        <SearchForm
          isChecked={isCheckedSwitchBySavedMovies}
          setIsChecked={setIsCheckedSwitchBySavedMovies}
          searchValue={searchFavoriteMoviesValue}
          setSearchValue={setSearchFavoriteMoviesValue}
          onSubmit={handleSearch}
          movies={favoriteMovies}
          cards={myCards}
          setCards={setMyCards}
          moviesLocalStorage="favoriteMovies"
          searchValueLocalStorage="searchFavoriteMoviesValue"
          savedMoviesPage
        />
        {myCards.length ?
          <MoviesCardList
            cards={myCards}
            hideFavorite={true}
          />
          : searchFavoriteMoviesValue && !myCards.length
            ? <p className="movies__not-found">Ничего не найдено</p>
            : ''}
        {isLoading && <Preloader/>}
      </main>
      <Footer/>
    </>

  );
};

export default SavedMovies;