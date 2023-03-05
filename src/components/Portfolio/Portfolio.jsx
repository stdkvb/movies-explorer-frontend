import linkIcon from '../../images/linkIcon.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='main__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://stdkvb.github.io/how-to-learn/' target="_blank" rel="noreferrer">
              <span className='portfolio__link'>Статичный сайт</span>
              <img className='portfolio__link-icon' src={linkIcon} alt='' />
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://stdkvb.github.io/russian-travel/' target="_blank" rel="noreferrer">
              <span className='portfolio__link'>Адаптивный сайт</span>
              <img className='portfolio__link-icon' src={linkIcon} alt='' />
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__link' href='https://tutvamne.mesto.nomoredomains.icu/' target="_blank" rel="noreferrer">
              <span className='portfolio__link'>Одностраничное приложение</span>
              <img className='portfolio__link-icon' src={linkIcon} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
