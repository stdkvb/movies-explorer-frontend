import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header header_blue'>
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
