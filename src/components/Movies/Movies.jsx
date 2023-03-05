import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const [loading, setLoading] = useState(true);
  const [noSearch, setNoSearch] = useState(true);
  const [movies, setMovies] = useState([]);
  const [foundMovie, setFoundMovie] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const isLimit = useLocation().pathname === '/movies' ? 7 : 3;

  useEffect(() => {
    setNoSearch(true);
    setMovies([]);
    setLoading(true);
  }, []);

  const handleSearchSubmit = (query) => {
    setNoSearch(false);
    const sortedMovie = movies.filter((item) => {
      const value = query.toLowerCase().trim();
      const movieRu = item.nameRU.toLowerCase().trim();
      const movieEn = item.nameEN.toLowerCase().trim();
      return (movieRu.includes(value) || movieEn.includes(value)) && item;
    });
    if (sortedMovie.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
      return;
    }
    setNotFound(false);
    setFoundMovie(sortedMovie);
    console.log(foundMovie);
  };

  const renderFilms = (value) => {
    setLoading(true);
    moviesApi.getMovies()
      .then((response) => {
        setMovies(response);
        handleSearchSubmit(value);
        console.log(response);
      })
      .catch((error) => {
        setErrorText('Проблема с соединением');
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <SearchForm
        onSearchSubmit={renderFilms}
      />
      {!noSearch && (
        <MoviesCardList
          movies={foundMovie}
          loading={loading}
          isLimit={isLimit}
          notFound={notFound}
          errorText={errorText}
        />
      )}
    </>
  );
}

export default Movies;
