import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import '../Header/Header.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { moviesData, savedMoviesData } from '../../utils/utils';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useForm } from 'react-hook-form';

function App() {

  const [ navigationActive, setNavigationActive ] = useState(false);
  const [ navigationButtonClass, setNavigationButtonClass ] = useState('header__navigation-button');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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
            path="/signup"
            element={<Register
              register={register}
              onSubmit={handleSubmit(onSubmit)}
              errors={errors}
            />}
          />
          <Route
            path="/signin"
            element={<Login
              register={register}
              onSubmit={handleSubmit(onSubmit)}
              errors={errors}
            />}
          />
          <Route
            exact path="/"
            element={<Main/>}
          />
          <Route
            path="/movies"
            element={
              <Movies
                navigationActive={navigationActive}
                navigationButtonClass={navigationButtonClass}
                openNavigation={openNavigation}
                movies={moviesData}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                navigationActive={navigationActive}
                navigationButtonClass={navigationButtonClass}
                openNavigation={openNavigation}
                movies={savedMoviesData}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                navigationActive={navigationActive}
                navigationButtonClass={navigationButtonClass}
                openNavigation={openNavigation}
              />
            }
          />
          <Route
            path="/not-found"
            element={<NotFoundPage/>}
          />
        </Routes>
      </div>
    </div>
  )
    ;
}

export default App;
