function PopupImage({picture, onClose}){
  return (
    <div 
      className={`picture popup ${(picture) && "popup_opened"}`} 
      id="image"
    >
        <div className="overlay picture__overlay" onClick={onClose}></div> 
        <div className="picture__container">
          <button 
            type="button" 
            className="popup__close-icon" 
            id="closedpicture"
            onClick={onClose}
          ></button>
          <img 
            src={picture} 
            alt='project' 
            className="picture__image"
          />
        </div>
      </div>
  )
}

export default PopupImage