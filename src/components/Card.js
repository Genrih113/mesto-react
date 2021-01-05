function Card(props) {
  return (
    <li className="place">
      <div className="place__img-container">
          <img className="place__img" src={props.card.link} alt={props.card.name} onClick={() => props.onCardClick(props.card)} />
      </div>
      <div className="place__description">
          <h2 className="place__title">{props.card.name}</h2>
          <div className="place__like-container">
          <button className="place__like-button" type="button"></button>
          <p className="place__like-counter">{props.card.likes.length}</p>
          </div>
      </div>
      <button className="place__delete-button" type="button"></button>
    </li>
  );
}

export default Card;

//<li className="place" key={key}>
