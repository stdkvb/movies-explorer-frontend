import loupe from '../../images/loupe.svg';
import find from '../../images/find.svg';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__bar'>
        <img className='search__icon' src={loupe} alt='' />
        <input className='search__input' placeholder='Фильм' required />
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
