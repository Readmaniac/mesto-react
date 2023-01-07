import React, { useContext, useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards}) {

  const currentUser = React.useContext(CurrentUserContext);

  return(
    <main>
      <section className="profile">
        <div className="profile__conteiner">
            <img 
              src={currentUser.avatar}
              className="profile__avatar" 
              alt = "Аватар" 
            />
            <button className="profile__btn" onClick={onEditAvatar}></button>
            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button 
                className="profile__edit-button" 
                type="button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
          </div>
            <button 
              className="profile__add-elements" 
              type="button" 
              onClick={onAddPlace}
              >
                
            </button>
      </section>
      <section className="elements">
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike}/>
        ))}
      </section>
    </main>
  )
}

export default Main