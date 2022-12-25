import PopupWithForm from "./PopupWithForm"

function PopupAvatar() {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" buttonName="Сохранить">
      <input 
      type="url" 
      placeholder="Ссылка на картинку" 
      className="form__input"
      name="link"
      required />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm>
  )
}

export default PopupAvatar