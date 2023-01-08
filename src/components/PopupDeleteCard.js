import PopupWithForm from "./PopupWithForm"

function PopupDeleteCard(props) {
  return (
      <PopupWithForm 
      name="deletecard" 
      title="Вы уверены?" 
      buttonName="Да" 
      isOpen={props.isOpen}
      onClose={props.onClose}>
      </PopupWithForm >
  )
}

export default PopupDeleteCard