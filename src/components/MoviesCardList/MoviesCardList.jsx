import React from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function MoviesCardList({
  movies, loading, notFound, errorText, isError, limit, onAddFilms,
}) {
  if (loading) {
    return <Preloader />;
  }
  if (notFound) {
    return <InfoTooltip errorText={errorText} isError={isError} />;
  }

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies__list">
          {movies.slice(0, limit).map((movie) => (
            <Card
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              images={`https://api.nomoreparties.co${movie.image.url}`}
            />
          ))}
        </ul>
        {limit < movies.length && <button onClick={onAddFilms} type="button" className="movies__button">Ещё</button>}
      </div>
    </section>
  );
}
export default MoviesCardList;
