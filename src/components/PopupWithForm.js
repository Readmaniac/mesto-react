function PopupWithForm(props) {
  function onSubmit(){
    
  }
  return(
    <div 
      className={`popup popup-${props.name} ${props.isOpen && "popup_opened"}`}
    >
      <div className="overlay" onClick={props.onClose}></div>
      <form className="form"onSubmit={onSubmit}>
        <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button className="form__save" type="submit" disabled>{props.buttonName}</button>
      </form>
    </div>
  )
}

export default PopupWithForm