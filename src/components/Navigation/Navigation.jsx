import React from 'react';
import {
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Navigation() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={(
          <nav className="menu header__menu-start">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/sign-up" className="menu__button link">Регистрация</Link>
              </li>
              <li className="menu__item">
                <Link to="/sign-in" className="menu__button menu__button_primary">Войти</Link>
              </li>
            </ul>
          </nav>
        )}
      />
      <Route path="/movies" element={<NavTab />} />
      <Route path="/saved-movies" element={<NavTab />} />
      <Route path="/profile" element={<NavTab />} />
    </Routes>
  );
}

export default Navigation;
