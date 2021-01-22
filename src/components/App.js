import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="body">
      <div className="page body__page">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} >

          <input id="personName" className="popup__input popup__name_profile" name="popupInputName"
            type="text" minLength="2" maxLength="40" required placeholder="Имя"/>
          <span id="personName-error" className="error"></span>
          <input id="personPassion" className="popup__input popup__passion_profile" name="popupInputPassion"
            type="text" minLength="2" maxLength="200" required placeholder="О себе"/>
          <span id="personPassion-error" className="error"></span>

        </PopupWithForm>

        <PopupWithForm
          name="place"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} >

          <input id="placeName" className="popup__input popup__name_place" name="popupInputPlace"
            type="text" minLength="2" maxLength="30" required placeholder="Название"/>
          <span id="placeName-error" className="error"></span>
          <input id="placeLink" className="popup__input popup__link_place" name="popupInputLink"
            type="url" required placeholder="Ссылка на картинку"/>
          <span id="placeLink-error" className="error"></span>

        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} >

          <input id="avatarLink" className="popup__input popup__link_avatar" name="popupInputAvatarLink"
            type="url" required placeholder="Ссылка на аватар"/>
          <span id="avatarLink-error" className="error"></span>

        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>

    </div>
  );
}

export default App;
