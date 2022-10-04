import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { moviesApi } from '../utils/MoviesApi';
import {
  authorize,
  getUser,
  register,
  verifyToken,
  logout,
  getMyMovies,
  addMovie,
  deleteMovie
} from '../utils/MainApi';

const CurrentUserContext = createContext();

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

export const CurrentUserProvider = ({ children }) => {

  const navigate = useNavigate();
  const [ currentUser, setCurrentUser ] = useState({});
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ navigationActive, setNavigationActive ] = useState(false);
  const [ navigationButtonClass, setNavigationButtonClass ] = useState('header__navigation-button');
  const [ movies, setMovies ] = useState([]);
  const [ favoriteMovies, setFavoriteMovies ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  /**
   * Регистрируем пользователя
   * @param name {string}
   * @param email {string}
   * @param password {string}
   */
  function handleRegister({ name, email, password }) {
    register({ name, email, password })
      .then(() => {
        console.log({ email, password });
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false);
      });
  }

  /**
   * Авторизуем пользователя
   * @param email {string}
   * @param password {string}
   */
  function handleLogin({ email, password }) {
    authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false);
      });
  }

  /**
   * Выход из системы пользователем
   */
  function signOutUser() {
    localStorage.clear();
    setCurrentUser({});
    setMovies([]);
    setFavoriteMovies([]);
    setLoggedIn(false);
    navigate('/');
    logout()
      .then(() => {
        console.log('Успешно вышли');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Создаем слушателя загрузки данных
   * @param value
   */
  function renderLoading(value) {
    setIsLoading(value);
  }

  /**
   * Проверим наличие JWT
   */
  function checkToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      verifyToken(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch(err => console.log(err));
    }
  }

  /**
   * Функция открытия/закрытия бургерменю
   */
  function openNavigation() {
    if (!navigationActive) {
      setNavigationButtonClass('header__navigation-button header__navigation-button_clicked');
    } else {
      setNavigationButtonClass('header__navigation-button');
    }
    setNavigationActive(!navigationActive);
  }

  /**
   * Отфильтруем фильмы
   * @param movie
   * @returns {boolean}
   */
  function filterMyMovies(movie) {
    return movie.owner === currentUser._id;
  }

  /**
   * Сохраним фильм в БД
   * @param movie
   */
  function handleSaveMovie(movie) {
    addMovie(movie)
      .then((res) => {
        setFavoriteMovies([ ...favoriteMovies, res ]);
      })
      .catch((err) => console.log(err));
  }

  /**
   * Удалим фильм из БД
   * @param movie
   */
  function handleDeleteMovie(movie) {
    deleteMovie(movie._id)
      .then(() => {
        const updateFavoriteMovies = favoriteMovies.filter(
          (item) => item._id !== movie._id
        );
        setFavoriteMovies(updateFavoriteMovies);
      })
      .catch(err => console.log(err));
  }

  // Блок useEffects

  // useEffect(() => {
  //   if (loggedIn) {
  //     getFavoriteMovies();
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      getUser()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [ loggedIn ]);

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (loggedIn && currentUser) {
      renderLoading(true);
      Promise.all([ moviesApi.getAllMovies(), getMyMovies() ])
        .then(([
                 beatFilms,
                 myMovies
               ]) => {
          const updatedMoviesData = beatFilms.map((movie) => {
            return ({
              ...movie,
              thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
              image: `https://api.nomoreparties.co${movie.image.url}`,
              movieId: movie.id
            });
          });
          setMovies(updatedMoviesData);
          const myFilteredMovies = myMovies.filter(filterMyMovies);
          setFavoriteMovies(myFilteredMovies);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          renderLoading(false);
        });
    }
  }, [ loggedIn, currentUser, setMovies, setFavoriteMovies ]);

  return (
    <CurrentUserContext.Provider
      value={{
        navigationActive,
        setNavigationActive,
        navigationButtonClass,
        setNavigationButtonClass,
        movies,
        setMovies,
        isLoading,
        setIsLoading,
        currentUser,
        setCurrentUser,
        favoriteMovies,
        setFavoriteMovies,
        loggedIn,
        setLoggedIn,
        onRegister: handleRegister,
        onLogin: handleLogin,
        onRenderLoading: renderLoading,
        isOpen: openNavigation,
        signOut: signOutUser,
        saveMovie: handleSaveMovie,
        deleteMovie: handleDeleteMovie,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
};