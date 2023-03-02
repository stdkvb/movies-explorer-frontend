import linkIcon from '../../images/linkIcon.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='main__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div className='portfolio__item'>
          <a className='portfolio__link' href='https://stdkvb.github.io/how-to-learn/'>Статичный сайт</a>
          <img className='portfolio__link-icon' src={linkIcon} alt='' />
        </div>
        <div className='portfolio__item'>
          <a className='portfolio__link' href='https://stdkvb.github.io/russian-travel/'>Адаптивный сайт</a>
          <img className='portfolio__link-icon' src={linkIcon} alt='' />
        </div>
        <div className='portfolio__item'>
          <a className='portfolio__link' href='https://tutvamne.mesto.nomoredomains.icu/'>Одностраничное приложение</a>
          <img className='portfolio__link-icon' src={linkIcon} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
