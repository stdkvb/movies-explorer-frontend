import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import HeadMain from '../HeadMain/HeadMain';

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
      <HeadMain />
      <SearchForm
        onSearchSubmit={onSearchSubmit}
        onHandleCheck={onHandleCheck}
        shortChecked={shortChecked}
        onSearchValue={onSearchValue}
        searchValue={searchValue}
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
        />
      )}
    </>
  );
}
export default Movies;
