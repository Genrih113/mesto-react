import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then((result) => {
      setCards(result);
    });
  }, []);



  return (

    <main className="main">

      <section className="profile">
        <div className="person">
          <div className="person__avatar-container">
            <div className="person__avatar-img-container">
            <img className="person__avatar" src={userAvatar} alt="Аватар"/>
            </div>
            <div onClick={props.onEditAvatar} className="person__avatar-button"></div>
          </div>
          <div className="person__edit">
            <div className="person__description">
              <h1 className="person__name">{userName}</h1>
              <p className="person__passion">{userDescription}</p>
            </div>
            <button onClick={props.onEditProfile}
              className="person__edit-button" type="button" aria-label="Редактировать">
            </button>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="add-button" type="button" aria-label="Добавить"></button>
      </section>

      <section>
          <ul className="places">
            {cards.map((card, i) => <Card key={i} card={card} onCardClick={props.onCardClick} />)}
          </ul>
      </section>

    </main>

  );
}

export default Main;

//{cards.map((card, i) => <Card key={i} card={card} onCardClick={props.onCardClick} />)}
