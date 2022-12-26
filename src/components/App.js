import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupAvatar from './PopupAvatar';
import PopupProfile from './PopupProfile';
import PopupCreateCard from './PopupCreateCard';
import PopupDeleteCard from './PopupDeleteCard';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
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
      <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <PopupProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupCreateCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopupDeleteCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;