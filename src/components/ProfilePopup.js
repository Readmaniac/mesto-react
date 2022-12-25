import PopupWithForm from "./PopupWithForm"

function ProfilePopup() {
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" buttonName="Сохранить">
      <input 
        type="text" 
        placeholder="Жак-Ив Кусто" 
        className="form__input form-name"
        name="name" 
        tabIndex="1"
        minLength="2"
        maxLength="40"
        title="Длина поля должна быть 2 и более символов и менее или равно 40"
        id="field-name"
        required 
      />
      <span className="form__item-error form__item-error_field_name" ></span>
      <input type="text" 
        placeholder="Исследователь океана" 
        className="form__input form-job"
        name="link"
        tabIndex="2"
        minLength="2"
        maxLength="200"
        title="Длина поля должна быть 2 и более символов и менее или равно 200"
        id="field-job"
        required 
      />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm> 
  )
}

export default ProfilePopup