function ImagePopup(props) {
  return (
    <div className={`popup popup_place-view ${props.card.link && 'popup_opened'}`}>
      <figure className="popup__figure">
        <img className="popup__place-image" src={`${props.card.link}`}/>
        <figcaption className="popup__place-caption">{props.card.name}</figcaption>
        <button className="popup__close popup__close_place-view" type="button" aria-label="Закрыть"
          onClick={props.onClose}>
        </button>
      </figure>
    </div>
  )
}

export default ImagePopup;
