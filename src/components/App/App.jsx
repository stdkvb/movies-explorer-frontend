import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <>
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
      </Switch>
      <Footer />
    </>
  );
}

export default App;
