import React from 'react';
import './MoviesCard.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const MoviesCard = ({ hideFavorite, ...movie }) => {

  const { saveMovie, deleteMovie, favoriteMovies } = useCurrentUser();
  const favoriteMovie = favoriteMovies.find((favoriteMovie) => favoriteMovie.movieId === movie.id);

  /**
   * Конвертируем полученное время в часы и минуты
   * @param duration {number}
   * @returns {*}
   */
  function convertTime(duration) {
    let hour = Math.floor(duration / 60);
    let minute = Math.floor(duration % 60);

    let hDisplay = hour > 0 ? hour + 'ч' : '';
    let mDisplay = minute > 0 ? minute + 'м' : '';

    return hDisplay + mDisplay;
  }

  /**
   * Добавим/удалим фильм
   */
  function handleCardFavorite() {
    if (!favoriteMovie) {
      saveMovie(movie);
      console.log('save');
    } else {
      deleteMovie(favoriteMovie);
      console.log('delete');
    }
  }

  /**
   * Удалим фильм
   */
  function handleDeleteSavedMovie() {
    deleteMovie(movie);

  }

  const cardFavoriteButtonClassName = `movie__favorite ${favoriteMovie ? 'movie__favorite_active' : ''}`;
  let button;
  if (hideFavorite) {
    button = <button type="button" onClick={handleDeleteSavedMovie} className="movie__button_delete"/>;
  } else {
    button = <button type="button" onClick={handleCardFavorite} className={cardFavoriteButtonClassName}/>;
  }

  return (
    <li className="movie">
      <img className="movie__image" src={movie.image} alt="Фильм"/>
      <div className="movie__container">
        <div className="movie__content">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__duration">{convertTime(movie.duration)}</p>
        </div>
        {button}
      </div>
    </li>
  );
};

export default MoviesCard;