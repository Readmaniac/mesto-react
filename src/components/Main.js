import { useEffect, useState } from 'react';
import avatar from '../images/Avatar.svg'
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userAvatar, setUserAvatar] = useState(avatar);
  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [cards, setCards] = useState([]);

  useEffect(()=> {
    Promise.all([api.getAllCards(), api.getUsersInfo()])
    .then(([allCards, userData]) => {
      setUserAvatar(userData.avatar);
      setUserName(userData.name);
      setUserDescription(userData.about);
      setCards(allCards)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  },[])

  return(
    <main>
      <section className="profile">
        <div className="profile__conteiner">
            <img 
              src={userAvatar} 
              className="profile__avatar" 
              alt = "Аватар" 
              
            />
            <button className="profile__btn" onClick={onEditAvatar}></button>
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button 
                className="profile__edit-button" 
                type="button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__subtitle">{userDescription}</p>
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
          <Card key={card._id} card={card} onCardClick={onCardClick}/>
        ))}
      </section>
    </main>
  )
}

export default Main