import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { useCurrentUser } from '../../contexts/CurrentUserContext';


const SavedMovies = () => {

  const { favoriteMovies, onRenderLoading, isLoading } = useCurrentUser();

  const [ myCards, setMyCards ] = useState([]);
  const [ isCheckedSwitchBySavedMovies, setIsCheckedSwitchBySavedMovies ] = useState(false);
  const [ searchFavoriteMoviesValue, setSearchFavoriteMoviesValue ] = useState();

  /**
   * Функция переключения свича короткометражек
   */
  const handleToggle = () => {
    setIsCheckedSwitchBySavedMovies(isCheckedSwitch => !isCheckedSwitch);
    localStorage.setItem('switchBySavedMovies', JSON.stringify(!isCheckedSwitchBySavedMovies));
    if (!isCheckedSwitchBySavedMovies) {
      setMyCards(myCards.filter(card => card.duration < 40));
    } else {
      setMyCards(favoriteMovies);
    }
  };

  /**
   * Функция поиска фильмов
   * @param data
   */
  function handleSearch(data) {

    function filterMovies(favoriteMovies) {
      return favoriteMovies.nameRU.toLowerCase().includes(data.search.toLowerCase());
    }

    function shortMovies(movie) {
      return movie.duration < 40;
    }

    onRenderLoading(true);
    let searchResult = favoriteMovies.filter(filterMovies);
    if (isCheckedSwitchBySavedMovies) {
      searchResult = searchResult.filter(shortMovies);
    }
    setMyCards([ ...searchResult ]);
    setSearchFavoriteMoviesValue(data.search);
    onRenderLoading(false);
  }

  useEffect(() => {
    setMyCards(favoriteMovies);
  }, [ favoriteMovies ]);

  return (
    <>
      <Header/>
      <main className="content">
        <SearchForm
          isChecked={isCheckedSwitchBySavedMovies}
          onSubmit={handleSearch}
          handleToggle={handleToggle}
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