import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../Header/Header.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import { moviesData, savedMoviesData } from '../../utils/utils';

function App() {

  const [ navigationActive, setNavigationActive ] = useState(false);
  const [ navigationButtonClass, setNavigationButtonClass ] = useState('header__navigation-button');

  const openNavigation = () => {
    if (!navigationActive) {
      setNavigationButtonClass('header__navigation-button header__navigation-button_clicked');
    } else {
      setNavigationButtonClass('header__navigation-button');
    }
    setNavigationActive(!navigationActive);
  };

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route
            exact path="/"
            element={<Main/>}
          >
          </Route>
          <Route
            path="/movies"
            element={
              <Movies
                navigationActive={navigationActive}
                navigationButtonClass={navigationButtonClass}
                openNavigation={openNavigation}
                movies={moviesData}
              />
            }>
          </Route>
          <Route
            path="/saved-movies"
            element={<SavedMovies
              navigationActive={navigationActive}
              navigationButtonClass={navigationButtonClass}
              openNavigation={openNavigation}
              movies={savedMoviesData}
            />}
          >
          </Route>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
