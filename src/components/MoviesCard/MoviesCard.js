import React, { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = (card) => {

  const [ isFavorite, setIsFavorite ] = useState(false);

  function handleCardFavorite() {
    setIsFavorite(!isFavorite);
  }

  const cardFavoriteButtonClassName = `movie__favorite ${isFavorite ? 'movie__favorite_active' : ''}`;

  return (
    <li className="movie">
      <img className="movie__image" src={card.link} alt="Фильм"/>
      <div className="movie__container">
        <div className="movie__content">
          <h2 className="movie__title">{card.name}</h2>
          <p className="movie__duration">{card.duration}</p>
        </div>
        <button type="button" onClick={handleCardFavorite} className={cardFavoriteButtonClassName}/>
      </div>
    </li>
  );
};

export default MoviesCard;