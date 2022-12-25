import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  function handleEditProfileClick(){
    const popupProfile = document.querySelector('.popup-profile');
    popupProfile.classList.add('popup_opened')
  }

  function handleAddPlaceClick(){
    const popupCard = document.querySelector('.popup-card');
    popupCard.classList.add('popup_opened')
  }



  function handleEditAvatarClick(){
    const popupAvatar = document.querySelector('.popup-avatar');
    popupAvatar.classList.add('popup_opened')
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        //isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen
      />
      <Footer />
      
    </div>
  );
}

export default App;