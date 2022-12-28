import { useLocation } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import logo from '../../images/logo.svg';

function Header() {
  const path = useLocation().pathname;

  return (
    <header className={path === '/' ? 'header_blue' : 'header'}>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='лого' />
        <NavTab />
      </div>
    </header>
  );
}

export default Header;
