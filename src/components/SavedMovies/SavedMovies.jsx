import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        movies={[]}
      />
    </>
  );
}

export default SavedMovies;
