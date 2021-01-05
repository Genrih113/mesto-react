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
          //isEditProfilePopupOpen={isEditProfilePopupOpen}
          //isAddPlacePopupOpen={isAddPlacePopupOpen}
          //isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          //closeAllPopups={closeAllPopups}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={
                <>
                <input id="personName" className="popup__input popup__name_profile" name="popupInputName"
                    type="text" minLength="2" maxLength="40" required placeholder="Имя"/>
                <span id="personName-error" className="error"></span>
                <input id="personPassion" className="popup__input popup__passion_profile" name="popupInputPassion"
                    type="text" minLength="2" maxLength="200" required placeholder="О себе"/>
                <span id="personPassion-error" className="error"></span>
                </>
            }
        />


        <PopupWithForm
            name="place"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            children={
                <>
                    <input id="placeName" className="popup__input popup__name_place" name="popupInputPlace"
                        type="text" minLength="2" maxLength="30" required placeholder="Название"/>
                    <span id="placeName-error" className="error"></span>
                    <input id="placeLink" className="popup__input popup__link_place" name="popupInputLink"
                        type="url" required placeholder="Ссылка на картинку"/>
                    <span id="placeLink-error" className="error"></span>
                </>
            }
        />



        <div className="popup popup_confirm">
        <form className="popup__container popup__container_confirm" name="confirmPopupForm" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__submit" type="submit">Да</button>
            <button className="popup__close popup__close_confirm" type="button" aria-label="Закрыть"></button>
        </form>
        </div>

        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            children={
                <>
                    <input id="avatarLink" className="popup__input popup__link_avatar" name="popupInputAvatarLink"
                        type="url" required placeholder="Ссылка на аватар"/>
                    <span id="avatarLink-error" className="error"></span>
                </>
            }
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />


      </div>

    </div>
  );
}

export default App;
