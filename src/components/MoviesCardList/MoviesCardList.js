import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {

  return (
    <section className="movies">
      <ul className="movies__list">
        {
          movies.map((data) => (
            <MoviesCard
              key={data.name}
              {...data}
            />))
        }
      </ul>
    </section>
  );
};

export default MoviesCardList;