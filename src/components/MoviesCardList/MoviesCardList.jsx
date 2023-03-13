import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function MoviesCardList({
  movies,
  loading,
  notFound,
  isError,
  errorText,
  limit,
  onAddFilms,
  onSave,
  onDelete,
  savedMovies,
}) {
  if (loading) {
    return <Preloader />;
  }
  if (notFound) {
    return <InfoTooltip errorText={errorText} isError={isError} />;
  }

  const handleImages = (movie) => {
    if (useLocation().pathname === '/movies') {
      return `https://api.nomoreparties.co${movie.image.url}`;
    }
    return movie.image;
  };

  const handleId = (movie) => {
    if (useLocation().pathname === '/movies') {
      return movie.id;
    }
    return movie._id;
  };

  return (
    <section className="movies">
      <div className="movies__wrapper">
        <ul className="movies__list">
          {movies.slice(0, limit).map((movie) => (
            <Card
              key={handleId(movie)}
              name={movie.nameRU}
              duration={movie.duration}
              images={handleImages(movie)}
              trailerLink={movie.trailerLink}
              movie={movie}
              onSave={onSave}
              onDelete={onDelete}
              savedMovies={savedMovies}
            />
          ))}
        </ul>
        {limit < movies.length && <button onClick={onAddFilms} type="button" className="movies__button">Ещё</button>}
      </div>
    </section>
  );
}
export default MoviesCardList;
