import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route exact path='/movies'>
        <Header />
        <Movies />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
