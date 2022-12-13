import loupe from '../../images/loupe.svg';
import find from '../../images/find.svg';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__bar'>
        <img className='search__icon' src={loupe} alt='' />
        <input className='search__input' placeholder='Фильм' />
        <button className='search__button' type='button'><img src={find} alt='' /></button>
      </div>
      <label className='search__filter' htmlFor='filter'>
        <input className='search__filter-checkbox' name='filter' type='checkbox' />
        Короткометражки
      </label>
    </section>
  );
}

export default SearchForm;
