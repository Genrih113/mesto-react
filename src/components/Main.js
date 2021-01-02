//import './Main.css';

function Main() {
    
    function handleEditAvatarClick() {
        document.querySelector('.popup_avatar').classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_profile').classList.add('popup_opened');
    };

    function handleAddPlaceClick() {
        document.querySelector('.popup_place').classList.add('popup_opened');
    }

    return (
        <>
            <main className="main">

                <section className="profile">
                    <div className="person">
                    <div className="person__avatar-container">
                        <div className="person__avatar-img-container">
                        <img className="person__avatar" src="" alt="Аватар"/>
                        </div>
                        <div onClick={handleEditAvatarClick} className="person__avatar-button"></div>
                    </div>
                    <div className="person__edit">
                        <div className="person__description">
                        <h1 className="person__name"></h1>
                        <p className="person__passion"></p>
                        </div>
                        <button onClick={handleEditProfileClick} 
                            className="person__edit-button" type="button" aria-label="Редактировать">
                        </button>
                    </div>
                    </div>
                    <button onClick={handleAddPlaceClick} className="add-button" type="button" aria-label="Добавить"></button>
                </section>

                <section>
                    <ul className="places">

                    </ul>
                </section>

            </main>

            <div className="popup popup_profile">
            <form className="popup__container popup__container_profile" name="profilePopupForm" noValidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <fieldset className="popup__content">
                <input id="personName" className="popup__input popup__name_profile" name="popupInputName"
                    type="text" minLength="2" maxLength="40" required placeholder="Имя"/>
                <span id="personName-error" className="error"></span>
                <input id="personPassion" className="popup__input popup__passion_profile" name="popupInputPassion"
                    type="text" minLength="2" maxLength="200" required placeholder="О себе"/>
                <span id="personPassion-error" className="error"></span>
                <button className="popup__submit" type="submit">Сохранить</button>
                </fieldset>
                <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть"></button>
            </form>
            </div>

            <div className="popup popup_place">
            <form className="popup__container popup__container_place" name="placePopupForm" noValidate>
                <h2 className="popup__title">Новое место</h2>
                <fieldset className="popup__content">
                <input id="placeName" className="popup__input popup__name_place" name="popupInputPlace"
                    type="text" minLength="2" maxLength="30" required placeholder="Название"/>
                <span id="placeName-error" className="error"></span>
                <input id="placeLink" className="popup__input popup__link_place" name="popupInputLink"
                    type="url" required placeholder="Ссылка на картинку"/>
                <span id="placeLink-error" className="error"></span>
                <button className="popup__submit" type="submit">Создать</button>
                </fieldset>
                <button className="popup__close popup__close_place" type="button" aria-label="Закрыть"></button>
            </form>
            </div>

            <div className="popup popup_place-view">
            <figure className="popup__figure">
                <img className="popup__place-image"/>
                <figcaption className="popup__place-caption"></figcaption>
                <button className="popup__close popup__close_place-view" type="button" aria-label="Закрыть"></button>
            </figure>
            </div>

            <div className="popup popup_confirm">
            <form className="popup__container popup__container_confirm" name="confirmPopupForm" noValidate>
                <h2 className="popup__title">Вы уверены?</h2>
                <button className="popup__submit" type="submit">Да</button>
                <button className="popup__close popup__close_confirm" type="button" aria-label="Закрыть"></button>
            </form>
            </div>

            <div className="popup popup_avatar">
            <form className="popup__container popup__container_avatar" name="avatarPopupForm" noValidate>
                <h2 className="popup__title">Обновить аватар</h2>
                <fieldset className="popup__content">
                <input id="avatarLink" className="popup__input popup__link_avatar" name="popupInputAvatarLink"
                    type="url" required placeholder="Ссылка на аватар"/>
                <span id="avatarLink-error" className="error"></span>
                <button className="popup__submit" type="submit">Сохранить</button>
                </fieldset>
                <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть"></button>
            </form>
            </div>

            <template id="place">
                <li className="place">
                <div className="place__img-container">
                    <img className="place__img" src="" alt=""/>
                </div>
                <div className="place__description">
                    <h2 className="place__title"></h2>
                    <div className="place__like-container">
                    <button className="place__like-button" type="button"></button>
                    <p className="place__like-counter">45</p>
                    </div>
                </div>
                <button className="place__delete-button" type="button"></button>
                </li>
            </template>

        </>
    );
}

export default Main;