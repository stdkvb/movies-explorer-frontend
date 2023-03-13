import React from 'react';
import {
  Link,
} from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

function Navigation({ loggedIn }) {
  if (loggedIn) {
    return <NavTab />;
  }
  return (
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
  );
}

export default Navigation;
