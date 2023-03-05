import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function Card({ name, duration, images }) {
  return (
    <div className='card'>
      <img className='card__image' src={images} alt='обложка фильма' />
      <div className='card__text'>
        <p className='card__title'>{name}</p>
        {useLocation().pathname === '/movies' && <button className='card__save-button' type='button' />}
        {useLocation().pathname === '/saved-movies' && <button className='card__delete-button' type='button' />}
      </div>
      <p className='card__duration'>{duration}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

export default Card;
