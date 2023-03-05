import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const isLimit = useLocation().pathname === '/movies' ? 7 : 3;

  const handleSearchSubmit = () => {
    setLoading(true);
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch(() => {
        console.log('Ошибка');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleSearchSubmit();
  }, []);

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
