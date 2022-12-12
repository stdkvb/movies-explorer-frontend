import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
        <Footer />
      </Route>
      <Route exact path='/movies'>
        <Movies />
        <Footer />
      </Route>
    </Switch>
  );
}

export default App;
