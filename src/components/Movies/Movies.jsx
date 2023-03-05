import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <button className='movies-more-button' type='button'>Ещё</button>
    </>
  );
}

export default Movies;
