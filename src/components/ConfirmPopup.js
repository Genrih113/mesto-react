function ConfirmPopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirm();
  }

  return (
    <div className={`popup popup_confirm ${props.isOpen && 'popup_opened'}`}>
      <form
        onSubmit={handleSubmit}
        className="popup__container popup__container_confirm" name="confirmPopupForm" noValidate>
        <h2 className="popup__title">Вы уверены?</h2>
        <button className="popup__submit" type="submit">Да</button>
        <button
          onClick={props.onClose}
          className="popup__close popup__close_confirm" type="button" aria-label="Закрыть"></button>
      </form>
    </div>
  )
}

export default ConfirmPopup;
