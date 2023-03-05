import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  moviesApi.getMovies().then(console.log);
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      <button className='movies-more-button' type='button'>Ещё</button>
    </>
  );
}

export default Movies;
