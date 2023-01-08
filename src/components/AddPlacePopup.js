import { useState } from "react";
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {
  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }

  function handleChangeCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({name: cardName, link: cardLink});
  } 

  return (
    <PopupWithForm 
      name="card" 
      title="Новое место" 
      buttonName="Создать" 
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
        value={cardName}
        onChange={handleChangeCardName}
        required />
      <span className="form__item-error form__item-error_field_name" ></span>
      <input 
        type="url" 
        placeholder="Ссылка на картинку" 
        className="form__input"
        name="link"
        tabIndex="4"
        value={cardLink}
        onChange={handleChangeCardLink}
        required 
      />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup