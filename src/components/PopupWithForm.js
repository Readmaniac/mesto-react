function PopupWithForm(props) {
  return(
    <div className={`popup popup-${props.name}`}>
      <div className="overlay"></div>
      <form className="form">
        <button type="button" className="popup__close-icon"></button>
        <h2 className="form__title">{props.title}</h2>{/* props.title!!! */}
        {props.children}
        <button className="form__save" type="submit" disabled>{props.buttonName}</button>
      </form>
      </div>
  )
}

export default PopupWithForm
