import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupAvatar from './PopupAvatar';
import PopupProfile from './PopupProfile';
import PopupCreateCard from './PopupCreateCard';
import PopupDeleteCard from './PopupDeleteCard';
import PopupImage from './PopupImage';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import avatar from '../images/Avatar.svg'

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isDeleteCardPopupOpen, setisDeleteCardPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    {
      name: "Жак-Ив Кусто",
      about: "Исследователь",
      avatar: avatar
    }
  )

  useEffect(() => {
    Promise.all([api.getAllCards(), api.getUsersInfo()])
    .then(([allCards, userData]) => {
      setCards(allCards);
      setCurrentUser(userData);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}, [cards, currentUser])
  
//Попап для смены аватара
  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }
//Попап для смены профиля
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }
//Попап для добавления карточки
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }
//Закрыть все попапы
  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  function handleCardClick (card){
    setSelectedCard(card);
  }

//Добавить в нужное место для вызова попапа подтверждения удаления
  function handleCardDelete(card) {
    //setisDeleteCardPopupOpen(!isDeleteCardPopupOpen) <- открывает попап дял подтверждения удаления карточки
    api.removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).
      then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
} 

  function handleUpdateUser(userInfoProfile) {
    api.setUserInfo(userInfoProfile)
      .then((userInfo) => {
        console.log(userInfo);
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
      closeAllPopups();
  }

  function handleUpdateAvatar(avatarLink){
    console.log(avatarLink);
    api.editUserAvatar(avatarLink)
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
      closeAllPopups();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <PopupAvatar 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupProfile 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupCreateCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <PopupDeleteCard isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups}/>
        <PopupImage 
          onClose={closeAllPopups}
          card={selectedCard} 
          handleCardClick={handleCardClick}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;