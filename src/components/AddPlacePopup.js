import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm"
import { useForm } from "../hooks/useForm";

function AddPlacePopup({isOpen, onClose, isLoading, onAddPlace}) {

  const {values, handleChange, setValues} = useForm({});

  React.useEffect(() => {
    setValues();
  }, [isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({name: values.name, link: values.link});
  } 

  return (
    <PopupWithForm 
      name="card" 
      title="Новое место" 
      buttonName="Создать" 
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
        onChange={handleChange}
        required />
      <span className="form__item-error form__item-error_field_name" ></span>
      <input 
        type="url" 
        placeholder="Ссылка на картинку" 
        className="form__input"
        name="link"
        tabIndex="4"
        onChange={handleChange}
        required 
      />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup