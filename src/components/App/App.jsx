import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PrivateRoutes from '../../utils/PrivateRoute';
import api from '../../utils/MainApi';
import Page from '../Page/Page';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import moviesApi from '../../utils/MoviesApi';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [noSearch, setNoSearch] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorText, setErrorText] = useState('Что-то пошло не так');
  const [limit, setLimit] = useState(0);
  const [shortChecked, setShortChecked] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  console.log(loggedIn);
  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setLoggedIn(true);
        navigate('/');
        setCurrentUser(data);
      })
      .catch((error) => {
        if (error === 400) {
          console.log('400 - токен не передан или передан не в том формате');
        } else if (error === 401) {
          console.log('401 - переданный токен некорректен');
        } else {
          console.log(`${error.status} – ${error.statusText}`);
        }
      });
  }, []);

  const getShortMovies = (movies) => movies.filter((movie) => movie.duration <= 40);

  useEffect(() => {
    if (localStorage.getItem('savedChecked') === 'true') {
      setShortChecked(true);
    } else {
      setShortChecked(false);
    }
  }, []);

  useEffect(() => {
    if (searchResult.length === 0) {
      setNotFound(true);
      setErrorText('Ничего не найдено');
    }
  }, [searchResult]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMovies) {
      setNotFound(false);
      setNoSearch(false);
      if (shortChecked) {
        setSearchResult(getShortMovies(savedMovies));
      } else {
        setSearchResult(savedMovies);
      }
    }
  }, [shortChecked]);

  const handleShortFilter = () => {
    setShortChecked(!shortChecked);
    localStorage.setItem('savedChecked', !shortChecked);
  };

  const checkShortFilter = (movies) => {
    if (shortChecked) {
      return getShortMovies(movies);
    }
    return movies;
  };

  const getFoundMovies = (preparedFilms, query) => preparedFilms.filter((item) => {
    const value = query.toLowerCase().trim();
    const movieRu = item.nameRU.toLowerCase().trim();
    const movieEn = item.nameEN.toLowerCase().trim();
    return (movieRu.includes(value) || movieEn.includes(value)) && item;
  });

  const handleSortedMovies = (movies, query) => {
    const foundMovies = getFoundMovies(movies, query);
    localStorage.setItem('savedMovies', JSON.stringify(foundMovies));
    const checkedMovies = checkShortFilter(foundMovies);
    setSearchResult(checkedMovies);
  };

  const handleSearchSubmit = (query) => {
    setNoSearch(false);
    setNotFound(false);
    if (allMovies.length === 0) {
      setLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          setAllMovies(movies);
          handleSortedMovies(movies, query);
        })
        .catch((error) => {
          console.log(error);
          setErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
        .finally(() => setLoading(false));
    } else {
      handleSortedMovies(allMovies, query);
    }
  };

  const handleSavedSearchSubmit = (query) => {
    const foundSavedMovies = getFoundMovies(savedMovies, query);
    const checkedSavedMovies = checkShortFilter(foundSavedMovies);
    setSavedMovies(checkedSavedMovies);
  };

  const handleDeleteMovie = (dataMovie) => {
    api.deleteMovie(dataMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item.movieId !== dataMovie.movieId));
      })
      .catch((error) => console.log(error));
  };

  const handleSaveMovie = (dataMovie) => {
    const isSaved = savedMovies.some((item) => item.movieId === dataMovie.id);
    if (isSaved) {
      const savedMovie = savedMovies.find((item) => item.movieId === dataMovie.id);
      handleDeleteMovie(savedMovie);
      return;
    }

    api.createMovie(dataMovie)
      .then((response) => {
        setSavedMovies([...savedMovies, response]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setLoading(true);
    api.getMovies()
      .then((response) => {
        setSavedMovies(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const addMovies = () => setLimit(limit * 2);

  useEffect(() => {
    if (width <= 800 && width > 400) {
      setLimit(3);
    } else if (width <= 400) {
      setLimit(5);
    } else {
      setLimit(7);
    }
  }, [width]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Page loggedIn={loggedIn} />}>
          <Route index element={<Main />} />
          <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
            <Route
              path="/movies"
              element={(
                <Movies
                  onSearchSubmit={handleSearchSubmit}
                  onHandleCheck={handleShortFilter}
                  shortChecked={shortChecked}
                  noSearch={noSearch}
                  movies={searchResult}
                  loading={loading}
                  notFound={notFound}
                  errorText={errorText}
                  limit={limit}
                  onAddFilms={addMovies}
                  onSave={handleSaveMovie}
                  savedMovies={savedMovies}
                />
            )}
            />
            <Route
              path="/saved-movies"
              element={(
                <SavedMovies
                  savedMovies={savedMovies}
                  onDelete={handleDeleteMovie}
                  onSearchSubmit={handleSavedSearchSubmit}
                  onHandleCheck={handleShortFilter}
                  shortChecked={shortChecked}
                  notFound={notFound}
                />
              )}
            />
            <Route path="/profile" element={<Profile onCurrentUser={setCurrentUser} onLoggedIn={setLoggedIn} />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<Login onLoggedIn={setLoggedIn} />} />
        <Route path="/sign-up" element={<Register onLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
