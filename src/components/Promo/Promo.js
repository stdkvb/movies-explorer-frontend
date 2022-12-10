import './Promo.css';
import logo from '../../images/logo.svg';
import planet from '../../images/planet.svg';

function Promo() {
  return (
    <section className='promo'>
        <div className='promo__container'>
            <div className='promo__auth-bar'>
                <img className='promo__logo' src={logo} alt='лого'></img>
                <button className='promo__button'>Регистрация</button>
                <button className='promo__button'>Войти</button>
            </div>
            <div className='promo__content'>
                <div className='promo__text'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <span className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                </div>
                <img className='promo__image' src={planet} alt=''></img>
            </div>
            <button className='promo__button'>Узнать больше</button>
        </div>
    </section>
  );
}

export default Promo;