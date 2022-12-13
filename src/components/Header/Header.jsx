import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header() {
  const path = useLocation().pathname;

  return (
    <header className={path === '/' ? 'header_blue' : 'header'}>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='лого' />
        <div>
          <button className='header__button' type='button'>Регистрация</button>
          <button className='header__button header__button_colored' type='button'>Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
