import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup (props) {
  //реф-объект для картинки аватара
  const avatarLinkRef = React.useRef();

  //обработчик отправки формы со значением поля из рефа
  function handleSubmit(e) {
    e.preventDefault();
    console.log(avatarLinkRef.current.value);
    props.onUpdateAvatar(avatarLinkRef.current.value);
    avatarLinkRef.current.value = '';
  }

  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit} >

      <input
        //привязка рефа к DOM - input
        ref={avatarLinkRef}
        id="avatarLink" className="popup__input popup__link_avatar" name="popupInputAvatarLink"
        type="url" required placeholder="Ссылка на аватар"
      />
      <span id="avatarLink-error" className="error"></span>

    </PopupWithForm>
  )
}

export default EditAvatarPopup;
