function PicturePopup() {
  return (
  <div className="picture popup" id="image">
    <div className="overlay picture__overlay"></div> 
    <div className="picture__container">
      <button type="button" className="popup__close-icon" id="closedpicture"></button>
      <img src="#" alt="" className="picture__image" />
      <p className="picture__name">Название</p>
    </div>
  </div>
  )
}

export default PicturePopup