function PopupWithForm(props) {
  return(
    <div className={`popup ${props.isOpen && 'popup_opened'} popup_${props.name}`}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
      props.onClose()
    }}}>
      <form className={`popup__container popup__container_${props.name}`} name={`${props.name}PopupForm`} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__content">

          {props.children}

          <button className="popup__submit" type="submit">{props.buttonText}</button>
        </fieldset>
        <button onClick={props.onClose} className={`popup__close popup__close_${props.name}`} type="button" aria-label="Закрыть"></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
