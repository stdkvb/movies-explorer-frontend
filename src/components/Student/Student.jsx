import photo from '../../images/photo.png';

function Student() {
  return (
    <section className='student'>
      <div className='main__container'>
        <h2 className='main__title'>Студент</h2>
        <div className='student__container'>
          <div className='student__text'>
            <p className='student__name'>Виталий</p>
            <p className='student__about'>Фронтенд-разработчик, 30 лет</p>
            <p className='student__description'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ.
              У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
              фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className='student__link' href='https://github.com/stdkvb' target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className='student__photo' src={photo} alt='фото' />
        </div>
      </div>
    </section>
  );
}

export default Student;
