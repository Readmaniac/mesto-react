import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `elements__likes-btn ${isLiked && 'elements__likes_active'}` 
  );

  function handleClick() {
    onCardClick(card);
  }  

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }  

  return (
    <div className="elements__container">
      <img 
        src={card.link} 
        alt={card.name} 
        className="elements__image"
        onClick={handleClick}
      />
      {isOwn && <button className='elements__delete' type="button" onClick={handleDeleteClick} />}
      <div className="elements__content">
        <p className="elements__name" aria-placeholder="Название">{card.name} </p>
        <div className="elements__likes">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <span className="elements__likes-number">{card.likes.length}</span>
        </div>
      </div>
    </div> 
  )
}

export default Card