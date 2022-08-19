import { useEffect, useState } from "react";
import pencil from "../images/Pencil.svg";
import plus from "../images/Plus.svg";
import Card from "./Card";
import { api } from "../utils/Api";

function Main(props) {

  const [userAvatar, setUserAvatar] = useState("");
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfoFromServer(), api.getInitialCardsFromServer()])
      .then(([userData, dataCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(dataCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatar}
          >
            <button
              className="profile__avatar-edit-button"
              type="button"
            ></button>
            <img src={userAvatar} alt="аватар" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <div className="profile__name-edit">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="button button_type_edit"
                onClick={props.onEditProfile}
              >
                <img src={pencil} alt="карандаш" />
              </button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="button button_type_add"
          onClick={props.onAddPlace}
        >
          <img src={plus} alt="плюс"/>
        </button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card 
          card={card} 
          key={card._id} 
          onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
