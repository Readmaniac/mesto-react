import PopupWithForm from "./PopupWithForm"

function PopupCreateCard(props) {
  return (
    <PopupWithForm 
      name="card" 
      title="Новое место" 
      buttonName="Создать" 
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input 
        type="text" 
        placeholder="Название" 
        className="form__input"
        name="name"
        tabIndex="3"
        minLength="2"
        maxLength="30"
        title="Длина поля должна быть 2 и более символов и менее или равно 30"
        required />
      <span className="form__item-error form__item-error_field_name" ></span>
      <input 
        type="url" 
        placeholder="Ссылка на картинку" 
        className="form__input"
        name="link"
        tabIndex="4"
        required 
      />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm>
  )
}

export default PopupCreateCard