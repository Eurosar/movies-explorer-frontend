import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

/**
 * Определим количество карточек в зависимости от размера экрана
 * @returns {{add: number, count: number}}
 */
const resize = () => {
  let result;
  if (window.innerWidth >= 1280) {
    result = { count: 12, add: 3 };
  } else if (window.innerWidth <= 1279 && window.innerWidth > 891) {
    result = { count: 8, add: 2 };
  } else {
    result = { count: 5, add: 2 };
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