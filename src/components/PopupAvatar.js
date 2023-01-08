import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm"

function PopupAvatar(props) {

  const avatarLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatarLinkRef.current.value,
    });
    
  }

  return (
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input 
      type="url" 
      placeholder="Ссылка на картинку" 
      className="form__input"
      name="link"
      ref={avatarLinkRef}
      required />
      <span className="form__item-error form__item-error_field_link" ></span>
    </PopupWithForm>
  )
}

export default PopupAvatar