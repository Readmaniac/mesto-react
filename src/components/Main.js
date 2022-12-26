import PicturePopup from './PicturePopup';
import PopupImage from './PopupImage';
import avatar from '../images/Avatar.svg'



function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return(
    <>
      <section className="profile">
        <div className="profile__conteiner">
            <img 
              src={avatar} 
              className="profile__avatar" 
              alt = "Аватар" 
              
            />
            <button className="profile__btn" onClick={onEditAvatar}></button>
            <div className="profile__info">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button 
                className="profile__edit-button" 
                type="button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__subtitle">Исследователь океана</p>
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
        
      </section>
    </>

  )
}

export default Main