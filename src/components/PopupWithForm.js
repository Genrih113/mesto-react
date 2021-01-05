function PopupWithForm(props) {
    return(
        //<div className={props.isOpen ? `popup popup_opened popup_${props.name}` : `popup popup_${props.name}`}>
        <div className={`popup ${props.isOpen && 'popup_opened'} popup_${props.name}`}>
            <form className={`popup__container popup__container_${props.name}`} name={`${props.name}PopupForm`} noValidate>
                <h2 className="popup__title">{props.title}</h2>
                <fieldset className="popup__content">
                
                {props.children}

                <button className="popup__submit" type="submit">Создать</button>
                </fieldset>
                <button onClick={props.onClose} className={`popup__close popup__close_${props.name}`} type="button" aria-label="Закрыть"></button>
            </form>
        </div>
    );
}

export default PopupWithForm;