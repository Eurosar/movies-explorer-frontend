import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {

  return (
    <>
      <Header>
        <Navigation/>
      </Header>
      <SearchForm/>
    </>
  );
};

export default Movies;
