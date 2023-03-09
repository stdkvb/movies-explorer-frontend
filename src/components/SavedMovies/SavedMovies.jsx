import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, onDelete }) {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        onDelete={onDelete}
      />
    </>
  );
}

export default SavedMovies;
