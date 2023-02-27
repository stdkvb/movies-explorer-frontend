import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <ErrorPage />
      <Register />
      <Login />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
