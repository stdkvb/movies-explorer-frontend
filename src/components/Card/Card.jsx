// import { useLocation } from 'react-router-dom';

// function Card({ name, duration, images }) {
//   return (
//     <div className='card'>
//       <img className='card__image' src={images} alt='обложка фильма' />
//       <div className='card__text'>
//         <p className='card__title'>{name}</p>

//       </div>
//       <p className='card__duration'>{duration}</p>
//     </div>
//   );
// }

// export default Card;

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Card({
  name,
  duration,
  images,
  trailerLink,
}) {
  const [saved, setSaved] = useState(false);

  const handleSaved = () => {
    setSaved(!saved);
  };

  const convertDuration = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = duration % 60;
    return hours !== 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  };

  return (
    <li className="movies-list__item">
      <div className="movies__image-container">
        <a className="movies-list__link-image" href={trailerLink} target="_blank" rel="noreferrer">
          <img className="movies__image" src={images} alt={`Изображение фильма – ${name}`} />
        </a>
      </div>
      <div className="movies-content__content">
        <div>
          <h2 className="movies-list__name"><a className="movies-list__link" href={trailerLink} target="_blank" rel="noreferrer">{name}</a></h2>
          <p className="movies-list__duration">{convertDuration(duration)}</p>
        </div>
        <div>
          {useLocation().pathname === '/movies'
            && <button onClick={handleSaved} type="button" className={`movies-list__save ${saved && 'movies-list__save_active'}`} aria-label="save-film" />}
          {useLocation().pathname === '/saved-movies'
            && <button type="button" className="movies-list__delete" aria-label="save-film" />}
        </div>
      </div>
    </li>
  );
}
export default Card;
