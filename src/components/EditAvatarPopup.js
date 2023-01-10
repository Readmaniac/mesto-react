import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({isOpen, onClose, isLoading, onUpdateAvatar}) {
  const avatarLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarLinkRef.current.value,
    });
    
  }

  return (
    <PopupWithForm 
      name="avatar" 
      title="Обновить аватар" 
      buttonName="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
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

export default EditAvatarPopup