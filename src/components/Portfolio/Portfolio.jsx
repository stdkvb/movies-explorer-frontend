import linkIcon from '../../images/linkIcon.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='main__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div className='portfolio__item'>
          <a className='portfolio__link' href='somesite'>Статичный сайт</a>
          <img className='portfolio__link-icon' src={linkIcon} alt='' />
        </div>
        <div className='portfolio__item'>
          <a className='portfolio__link' href='somesite'>Адаптивный сайт</a>
          <img className='portfolio__link-icon' src={linkIcon} alt='' />
        </div>
        <div className='portfolio__item'>
          <a className='portfolio__link' href='somesite'>Одностраничное приложение</a>
          <img className='portfolio__link-icon' src={linkIcon} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
