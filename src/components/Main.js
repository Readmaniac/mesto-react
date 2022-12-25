import Profile from './Profile';
import Elements from './Elements';
import PopupAvatar from './PopupAvatar';
import ProfilePopup from './ProfilePopup';
import PopupCreateCard from './PopupCreateCard';
import PicturePopup from './PicturePopup';
import PopupDeleteCard from './PopupDeleteCard';
import PopupImage from './PopupImage';



function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  const [isEditAvatarPopupOpen, onEditProfile] = useState(false)
  
  function (){
    onEditProfile(!isEditAvatarPopupOpen)
  }

  return(
    <>
      <Profile 
        handleAddPlaceClick={onAddPlace} 
        handleEditAvatarClick={onEditAvatar}
        handleEditProfileClick={onEditProfile}
      />
      <Elements />
      <PopupAvatar />
      {isEditAvatarPopupOpen && <ProfilePopup />}
      <PopupCreateCard />
      <PicturePopup />
      <PopupDeleteCard />
      <PopupImage />
    </>
  )
}

export default Main