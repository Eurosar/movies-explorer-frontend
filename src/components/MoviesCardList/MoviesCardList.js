import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  WINDOW_WIDTH_1280,
  WINDOW_WIDTH_1279,
  WINDOW_WIDTH_891,
  DESKTOP_ELEMENTS,
  LAPTOP_ELEMENTS,
  MOBILE_ELEMENTS
} from '../../utils/constants';

/**
 * Определим количество карточек в зависимости от размера экрана
 * @returns {{add: number, count: number}}
 */
const resize = () => {
  let result;
  if (window.innerWidth >= WINDOW_WIDTH_1280) {
    result = DESKTOP_ELEMENTS;
  } else if (window.innerWidth <= WINDOW_WIDTH_1279 && window.innerWidth > WINDOW_WIDTH_891) {
    result = LAPTOP_ELEMENTS;
  } else {
    result = MOBILE_ELEMENTS;
  }
  return result;
};

const MoviesCardList = ({ cards, hideFavorite }) => {

  const [ numberOfCard, setNumberOfCard ] = useState(resize());
  const [ counter, setCounter ] = useState(0);
  const [ generatedCards, setGeneratedCards ] = useState([]);

  /**
   * Функция работы кнопки Еще
   */
  const handleGetMoreMovies = () => {
    let endCardsList = counter + numberOfCard.add;
    if (endCardsList > cards.length) {
      endCardsList = cards.length;
    }

    const moreMovies = cards.slice(counter, endCardsList);
    setCounter(endCardsList);
    setGeneratedCards((prev) => {
      return [ ...prev, ...moreMovies ];
    });
  };

  /**
   * Определим размер экрана
   */
  const handleResize = () => {
    setNumberOfCard(resize());
  };

  // Блок UseEffects
  useEffect(() => {
    const cardsForRender = cards.slice(0, numberOfCard.count);
    setCounter(numberOfCard.count);
    setGeneratedCards(cardsForRender);
  }, [ cards, numberOfCard.count, setGeneratedCards ]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <section className="movies">
      <ul className="movies__list">
        {
          generatedCards
            .map((movie) => (
              <MoviesCard
                key={movie.movieId}
                {...movie}
                hideFavorite={hideFavorite}
              />
            ))
        }
      </ul>
      {counter < cards.length &&
        <button className="movies__pagination-button" type="button" onClick={handleGetMoreMovies}>Еще</button>}
    </section>
  );
};

export default MoviesCardList;