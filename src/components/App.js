import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupAvatar from './PopupAvatar';
import PopupProfile from './PopupProfile';
import PopupCreateCard from './PopupCreateCard';
import PopupDeleteCard from './PopupDeleteCard';
import PopupImage from './PopupImage';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

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
    setSelectedCard({})
  }

  function handleCardClick (card){
    setSelectedCard(card);
  }

  return (
    <div className="page">
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
    </div>
  );
}

export default App;