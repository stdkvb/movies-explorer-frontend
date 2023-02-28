import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavTab() {
  const setActive = ({ isActive }) => {
    if (isActive) {
      return 'header__button-navigation link link_active';
    }
    return 'header__button-navigation link';
  };
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleBurgerClick = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <nav className={`menu header__menu-navigation ${isOpenMenu && 'header__menu-navigation_is-active'}`}>
        <ul className="menu__list header__list-navigation">
          <li className="menu__item header__item-navigation header__item-navigation_inactive">
            <NavLink to="/" className={setActive}>
              Главная
            </NavLink>
          </li>
          <li className="menu__item header__item-navigation">
            <NavLink to="/movies" className={setActive} onClick={handleBurgerClick}>
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item header__item-navigation">
            <NavLink to="/saved-movies" className={setActive} onClick={handleBurgerClick}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/profile" className={`header__profile ${isOpenMenu && 'header__profile_is-active'}`}>
        <p className="profile__name">Аккаунт</p>
      </Link>
      <div role="presentation" onClick={handleBurgerClick} className={`header__burger burger ${isOpenMenu && 'burger_is-active'}`}>
        <span className={`burger__middle-line ${isOpenMenu ? 'burger__middle-line_is-active' : ''}`} />
      </div>
    </>
  );
}

export default NavTab;
