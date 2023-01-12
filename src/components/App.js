import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import PopupDeleteCard from './PopupDeleteCard';
import PopupImage from './PopupImage';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import avatar from '../images/Avatar.svg'

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setisDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    {
      name: "Жак-Ив Кусто",
      about: "Исследователь",
      avatar: avatar
    }
  );
  const [isLoading, setIsLoading] = useState(false);
  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard;

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) { // навешиваем только при открытии
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen]) 

  React.useEffect(() => {
    Promise.all([api.getAllCards(), api.getUsersInfo()])
    .then(([allCards, userData]) => {
      setCards(allCards);
      setCurrentUser(userData);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}, [])

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
//посмотреть большое изображение из карточки
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
//меняем инфо в профайле пользователя
  function handleUpdateUser(userInfoProfile) {
    setIsLoading(true)
    api.setUserInfo(userInfoProfile)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
//меняем аватар
  function handleUpdateAvatar(avatarLink){
    api.editUserAvatar(avatarLink)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }
//добавляем карточку
  function handleAddPlaceSubmit(card){
    api.addCard(card)
      .then((newCard) => {
        setCards((cardsList) => [newCard, ...cardsList])
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
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
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <AddPlacePopup 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading}
        />
        <PopupDeleteCard 
          isOpen={isDeleteCardPopupOpen} 
          onClose={closeAllPopups}
        />
        <PopupImage 
          onClose={closeAllPopups}
          card={selectedCard} 
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;