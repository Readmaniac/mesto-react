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
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState(
    {
      name: "Жак-Ив Кусто",
      about: "Исследователь",
      avatar: avatar
    }
  )

  useEffect(() => {
      api.getUsersInfo()
        .then((userData) => {
          setCurrentUser(userData)
        })
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

  function handleCardClick (card){
    setSelectedCard(card);
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
        />
        <Footer />
        <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        <PopupProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <PopupCreateCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <PopupDeleteCard onClose={closeAllPopups}/>
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