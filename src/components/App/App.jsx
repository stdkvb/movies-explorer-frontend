import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page from '../Page/Page';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/error-page" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
