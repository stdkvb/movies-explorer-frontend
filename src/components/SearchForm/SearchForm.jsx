import React, { useState } from 'react';
import loupe from '../../images/loupe.svg';
import find from '../../images/find.svg';

function SearchForm({ onSearchSubmit }) {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(search);
  };

  return (
    <section className='search'>
      <form className='search__bar' onSubmit={handleSubmit}>
        <img className='search__icon' src={loupe} alt='' />
        <input className='search__input' name="search" placeholder='Фильм' required onChange={handleChangeSearch} />
        <button className='search__button' type='submit'><img src={find} alt='' /></button>
      </form>
      <span className="search__error">Нужно ввести ключевое слово</span>
      <label className='search__filter' htmlFor='filter'>
        <input className='search__filter-checkbox' name='filter' id='filter' type='checkbox' />
        Короткометражки
      </label>
    </section>
  );
}

export default SearchForm;
