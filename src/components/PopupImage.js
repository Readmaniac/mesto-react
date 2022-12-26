function PopupImage({card, onClose, handleCardClick}){
  return (
    <div className={`picture popup ${(card.link) && "popup_opened"}`} id="image">
        <div className="overlay picture__overlay" onClick={onClose}></div> 
        <div className="picture__container">
          <button 
            type="button" 
            className="popup__close-icon" 
            id="closedpicture"
            onClick={onClose}
          ></button>
          <img 
            src={card.link} 
            alt="" 
            className="picture__image"
            onClick={handleCardClick}
          />
          <p className="picture__name">{card.name}</p>
        </div>
      </div>
  )
}

export default PopupImage