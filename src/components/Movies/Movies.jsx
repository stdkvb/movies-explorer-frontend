import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Movies() {
  const [loading, setLoading] = useState(true);
  const [noSearch, setNoSearch] = useState(true);
  const [movies, setMovies] = useState([]);
  const [foundMovie, setFoundMovie] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const [limit, setLimit] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 1280 && width > 800) {
      setLimit(7);
    } else if (width <= 800 && width > 400) {
      setLimit(3);
    } else if (width <= 400) {
      setLimit(5);
    }
  }, [width]);

  const addMovies = () => setLimit(limit * 2);

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
    localStorage.setItem('savedMovies', JSON.stringify(sortedMovie));
    setNotFound(false);
    setFoundMovie(sortedMovie);
    console.log(foundMovie);
  };

  useEffect(() => {
    setLoading(true);
    moviesApi.getMovies()
      .then((response) => {
        setMovies(response);
      })
      .catch(() => {
        setErrorText('Проблема с соединением');
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setNoSearch(false);
    console.log(JSON.parse(localStorage.getItem('savedMovies')));
    setFoundMovie(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  return (
    <>
      <SearchForm
        onSearchSubmit={handleSearchSubmit}
      />
      {!noSearch && (
        <MoviesCardList
          movies={foundMovie}
          loading={loading}
          notFound={notFound}
          errorText={errorText}
          limit={limit}
          onAddFilms={addMovies}
        />
      )}
    </>
  );
}

export default Movies;
