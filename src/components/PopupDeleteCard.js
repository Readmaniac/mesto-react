import PopupWithForm from "./PopupWithForm"

function PopupDeleteCard({isOpen, onClose}) {
  return (
      <PopupWithForm 
        name="deletecard" 
        title="Вы уверены?" 
        buttonName="Да" 
        isOpen={isOpen}
        onClose={onClose}
      />
  )
}

export default PopupDeleteCard