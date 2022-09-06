import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `${isOwn ? "card__button-remove" : "card__button-remove_hidden"}`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__button-like ${isLiked ? 'card__button-like_added' : ''}`;

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <div className="card">
      <button type="button" className={cardDeleteButtonClassName}></button>
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__body">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className={cardLikeButtonClassName}></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
