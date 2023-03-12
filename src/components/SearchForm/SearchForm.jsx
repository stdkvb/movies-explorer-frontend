import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import loupe from '../../images/loupe.svg';
import find from '../../images/find.svg';

function SearchForm(
  {
    onSearchSubmit,
    onHandleCheck,
    shortChecked,
    onSearchValue,
    searchValue,
    onHandleSavedMovieCheck,
  },
) {
  const pathName = useLocation().pathname;
  const handleSearchSubmit = (data) => {
    onSearchSubmit(data.search);
    if (pathName === '/movies') {
      onSearchValue(data.search);
    }
  };

  const onCheck = () => (pathName === '/movies' ? onHandleCheck() : onHandleSavedMovieCheck());
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  return (
    <section className="search">
      <form className="search__bar" onSubmit={handleSubmit(handleSearchSubmit)}>
        <img className="search__icon" src={loupe} alt="" />
        <input
          className="search__input"
          placeholder="Фильм"
          defaultValue={searchValue}
          {...register('search', {
            required: 'Нужно ввести ключевое слово',
            maxLength: {
              value: 30,
              message: 'Максимум 30 символов',
            },
          })}
        />
        <span className="search__error">{errors.search && `${errors.search.message || 'Что-то пошло не так...'}`}</span>
        <button className="search__button" type="submit"><img src={find} alt="Найти" /></button>
      </form>
      <label className="search__filter" htmlFor="filter">
        <input className="search__filter-checkbox" name="filter" id="filter" type="checkbox" onClick={onHandleCheck} onChange={onCheck} checked={shortChecked} />
        Короткометражки
      </label>
    </section>
  );
}

export default SearchForm;
