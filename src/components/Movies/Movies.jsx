import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(
  {
    onSearchSubmit,
    onHandleCheck,
    shortChecked,
    noSearch,
    movies,
    loading,
    notFound,
    errorText,
    limit,
    onAddFilms,
    onSave,
    savedMovies,
    onSearchValue,
    searchValue,
  },
) {
  return (
    <>
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        onHandleCheck={onHandleCheck}
        shortChecked={shortChecked}
      />
      {!noSearch && (
        <MoviesCardList
          movies={movies}
          loading={loading}
          notFound={notFound}
          errorText={errorText}
          limit={limit}
          onAddFilms={onAddFilms}
          onSave={onSave}
          savedMovies={savedMovies}
          onSearchValue={onSearchValue}
          searchValue={searchValue}
        />
      )}
    </>
  );
}
export default Movies;
