import Card from '../Card/Card';

function MoviesCardList() {
  return (
    <section className='cards'>
      <ul className='cards__list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
}

export default MoviesCardList;
