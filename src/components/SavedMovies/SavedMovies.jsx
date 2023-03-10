import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(
  {
    savedMovies,
    onDelete,
    onSearchSubmit,
    onHandleSavedMovieCheck,
    notFound,
    errorText,
  },
) {
  return (
    <>
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        onHandleSavedMovieCheck={onHandleSavedMovieCheck}
      />
      <MoviesCardList
        movies={savedMovies}
        onDelete={onDelete}
        notFound={notFound}
        errorText={errorText}
      />
    </>
  );
}

export default SavedMovies;
