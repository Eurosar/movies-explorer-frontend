import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


const SavedMovies = ({ navigationActive, navigationButtonClass, openNavigation, movies }) => {

  return (
    <>
      <Header>
        <Navigation
          navigationActive={navigationActive}
          navigationButtonClass={navigationButtonClass}
          isOpen={openNavigation}
        />
      </Header>
      <main className="content">
        <SearchForm/>
        <MoviesCardList
          movies={movies}
          hideFavorite={true}
        />
      </main>
      <Footer/>
    </>

  );
};

export default SavedMovies;