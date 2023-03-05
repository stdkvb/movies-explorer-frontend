import { useLocation } from 'react-router-dom';
import image from '../../images/cardimage.png';

function Card() {
  return (
    <div className='card'>
      <img className='card__image' src={image} alt='обложка фильма' />
      <div className='card__text'>
        <p className='card__title'>33 слова о дизайне</p>
        {useLocation().pathname === '/movies' && <button className='card__save-button' type='button' />}
        {useLocation().pathname === '/saved-movies' && <button className='card__delete-button' type='button' />}
      </div>
      <p className='card__duration'>1ч42м</p>
    </div>
  );
}

export default Card;
