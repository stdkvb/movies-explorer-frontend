import React from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, loading, isLimit }) {
  if (loading) {
    return <Preloader />;
  }

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies__list">
          {movies.slice(0, isLimit).map((movie) => (
            <Card
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              images={`https://api.nomoreparties.co${movie.image.url}`}
            />
          ))}
        </ul>
        <button type="button" className="movies__button">Ещё</button>
      </div>
    </section>
  );
}
export default MoviesCardList;
