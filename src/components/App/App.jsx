import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  console.log(loggedIn);
  useEffect(() => {
    console.log('test');
    api.getUserInfo()
      .then((response) => {
        setLoggedIn(true);
        console.log(response);
        navigate('/movies');
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
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Main />} />
        <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<Login onLoggedIn={setLoggedIn} />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
