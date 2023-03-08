import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../../utils/PrivateRoute';
import Page from '../Page/Page';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [loggedIn, setLoggedIn] = useState();
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
