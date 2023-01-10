function PopupWithForm({name, isOpen, onClose, onSubmit, title, children, isLoading, buttonName}) {

  return(
    <div 
      className={`popup popup-${name} ${isOpen && "popup_opened"}`}
    >
      <div className="overlay" onClick={onClose}></div>
      <form className="form" onSubmit={onSubmit}>
        <button type="button" className="popup__close-icon" onClick={onClose}></button>
        <h2 className="form__title">{title}</h2>
        {children}
        <button className="form__save" type="submit">{isLoading ? 'Сохранение...' : buttonName}</button>
      </form>
    </div>
  )
}

export default PopupWithForm