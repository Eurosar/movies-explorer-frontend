import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, hideFavorite }) => {

  return (
    <section className="movies">
      <ul className="movies__list">
        {
          movies.map((data) => (
            <MoviesCard
              key={data.name}
              {...data}
              hideFavorite={hideFavorite}
            />))
        }
      </ul>
    </section>
  );
};

export default MoviesCardList;