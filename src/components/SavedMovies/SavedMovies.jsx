import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  savedMovies, onDelete, onSearchSubmit, shortChecked, onHandleCheck, notFound,
}) {
  return (
    <>
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        shortChecked={shortChecked}
        onHandleCheck={onHandleCheck}
      />
      <MoviesCardList
        movies={savedMovies}
        onDelete={onDelete}
        notFound={notFound}
      />
    </>
  );
}

export default SavedMovies;
