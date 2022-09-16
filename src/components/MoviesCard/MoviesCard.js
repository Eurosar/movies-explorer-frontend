import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ hideFavorite, ...card }) => {

  const [ isFavorite, setIsFavorite ] = useState(false);

  function handleCardFavorite() {
    setIsFavorite(!isFavorite);
  }

  const cardFavoriteButtonClassName = `movie__favorite ${isFavorite ? 'movie__favorite_active' : ''}`;
  let button;
  if (hideFavorite) {
    button = <button type="button" className="movie__button_delete"/>;
  } else {
    button = <button type="button" onClick={handleCardFavorite} className={cardFavoriteButtonClassName}/>;
  }

  return (
    <li className="movie">
      <img className="movie__image" src={card.link} alt="Фильм"/>
      <div className="movie__container">
        <div className="movie__content">
          <h2 className="movie__title">{card.name}</h2>
          <p className="movie__duration">{card.duration}</p>
        </div>
        {button}
      </div>
    </li>
  );
};

export default MoviesCard;