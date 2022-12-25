import avatar from '../images/Avatar.svg';

function Profile({handleAddPlaceClick, handleEditAvatarClick, handleEditProfileClick}) {
  return (
    <div className="profile">
      <div className="profile__conteiner">
          <img 
            src={avatar} 
            className="profile__avatar" 
            alt = "Аватар" 
            
          />
          <button className="profile__btn" onClick={handleEditAvatarClick}></button>
          <div className="profile__info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button 
              className="profile__edit-button" 
              type="button"
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
          <button 
            className="profile__add-elements" 
            type="button" 
            onClick={handleAddPlaceClick}
            >
              
          </button>
    </div>
  )
}

export default Profile