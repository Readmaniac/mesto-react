function Card({card, onCardClick}) {

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