function Card({card, onCardClick}) {
  /* const isOwn = card.owner._id === currentUser._id; */

  function handleClick() {
    onCardClick(card);
  }  

  return (
    <div className="elements__container">
      <img 
        src={card.link} 
        alt={card.name} 
        className="elements__image"
        onClick={handleClick}
      />
      {/* {isOwn && <button className='button_del' onClick={handleDeleteClick} />}  */}

      <button className="elements__delete" type="button"></button>
      <div className="elements__content">
        <p className="elements__name" aria-placeholder="Название">{card.name} </p>
        <div className="elements__likes">
          <button className="elements__likes-btn" type="button"></button>
          <span className="elements__likes-number">{card.likes.length}</span>
        </div>
      </div>
    </div> 
  )
}

export default Card