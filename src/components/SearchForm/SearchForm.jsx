import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import loupe from '../../images/loupe.svg';
import find from '../../images/find.svg';

function SearchForm({ onSearchSubmit, onHandleCheck, shortChecked }) {
  const [searchValue, setSearchValue] = useState('');
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const handleSearchSubmit = (data) => {
    onSearchSubmit(data.search);
    setSearchValue(data.search);
    localStorage.setItem('searchValue', data.search);
  };

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue'));
  }, []);

  return (
    <section className='search'>
      <form className="search__bar" onSubmit={handleSubmit(handleSearchSubmit)}>
        <img className='search__icon' src={loupe} alt='' />
        <input
          className='search__input'
          placeholder='Фильм'
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
        <button className='search__button' type='submit'><img src={find} alt='' /></button>
      </form>
      <label className='search__filter' htmlFor='filter'>
        <input className='search__filter-checkbox' name='filter' id='filter' type='checkbox' onClick={onHandleCheck} defaultChecked={shortChecked} />
        Короткометражки
      </label>
    </section>
  );
}

export default SearchForm;
