import React from 'react';
import { Route, Switch } from 'react-router-dom';

function NavTab() {
  return (
    <Switch>
      <Route exact path='/'>
        <nav>
          <button className='nav__button' type='button'>Регистрация</button>
          <button className='nav__button nav__button_green' type='button'>Войти</button>
        </nav>
      </Route>
      <Route exact path='/movies'>
        <nav>
          <button className='nav__button' type='button'>Фильмы</button>
          <button className='nav__button' type='button'>Сохраненные фильмы</button>
          <button className='nav__button nav__button_grey' type='button'>Аккаунт</button>
        </nav>
      </Route>
      <Route exact path='/saved-movies'>
        <nav>
          <button className='nav__button' type='button'>Фильмы</button>
          <button className='nav__button' type='button'>Сохраненные фильмы</button>
          <button className='nav__button nav__button_grey' type='button'>Аккаунт</button>
        </nav>
      </Route>
    </Switch>
  );
}

export default NavTab;
