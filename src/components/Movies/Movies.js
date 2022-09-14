import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ navigationActive, navigationButtonClass, openNavigation, movies }) => {

  return (
    <>
      <Header>
        <Navigation
          navigationActive={navigationActive}
          navigationButtonClass={navigationButtonClass}
          isOpen={openNavigation}
        />
      </Header>
      <SearchForm/>
      <MoviesCardList movies={movies}/>
      <button className="movies__pagination-button" type="button">Еще</button>
    </>
  );
};

export default Movies;
