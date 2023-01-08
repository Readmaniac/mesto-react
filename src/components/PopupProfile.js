import React, { useState } from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function PopupProfile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({name, about: description,});
  } 

  return (
    <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
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
        value={name}
        onChange={handleChangeName}
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
        value={description}
        onChange={handleChangeAbout}
        required 
      />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm> 
  )
}

export default PopupProfile