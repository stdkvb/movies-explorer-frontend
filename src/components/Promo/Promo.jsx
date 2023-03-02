import planet from '../../images/planet.svg';

function Promo() {
  const handleAnchorScroll = (event) => {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className='promo'>
      <div className='main__container'>
        <div className='promo__content'>
          <div>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <img className='promo__image' src={planet} alt='' />
        </div>
        <button className='promo__button promo__button_bordered' type='button' onClick={handleAnchorScroll}>Узнать больше</button>
      </div>
    </section>
  );
}

export default Promo;
