import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  moviesApi.getMovies().then(console.log);
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default Movies;
