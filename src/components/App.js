
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";


function App() {
  const [isEditAvatarPopupOpen, setIsPopupAvatarOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsPopupProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsPopupAddPlaceOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


    useEffect(() => {
      api
        .getInitialCardsFromServer()
        .then((dataCards) => {
          setCards(dataCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    useEffect(() => {
      api
        .getUserInfoFromServer()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  function handleEditAvatarClick() {
    setIsPopupAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsPopupProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsPopupAddPlaceOpen(true);
  }

  function closeAllPopups() {
    setIsPopupAvatarOpen(false);
    setIsPopupProfileOpen(false);
    setIsPopupAddPlaceOpen(false);
    setImagePopupOpen(false);
    setSelectedCard(false);
  }

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
  };

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeStatus(isLiked, card._id)
      .then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    })
      .catch((err) => { console.log(err) })
  } 

  function handleCardDelete(card) {
    api
      .deleteCardFromServer(card._id)
      .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
      .catch((err) => { console.log(err) })
  }


  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <PopupWithForm
          name="update-avatar"
          isOpen={isEditAvatarPopupOpen}
          title="Обновить аватар"
          onClose={closeAllPopups}
          formName="edit"
          buttonText="Сохранить"
        >
          <input
            type="url"
            name="avatar"
            id="avatar-input"
            placeholder="Ссылка на аватарку"
            className="popup__input"
            required
          />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit"
          isOpen={isEditProfilePopupOpen}
          title="Редактировать профиль"
          onClose={closeAllPopups}
          formName="edit"
          buttonText="Сохранить"
        >
          <input
            type="text"
            name="name"
            id="name-input"
            className="popup__input popup__input-error_margin-bottom"
            minLength="2"
            maxLength="40"
            placeholder="Имя"
            required
          />
          <span className="popup__input-error"></span>
          <input
            type="text"
            name="job"
            id="job-input"
            className="popup__input"
            minLength="2"
            maxLength="200"
            placeholder="О себе"
            required
          />
          <span className="popup__input-error job-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="create"
          isOpen={isAddPlacePopupOpen}
          title="Новое место"
          onClose={closeAllPopups}
          formName="create"
          buttonText="Создать"
        >
          <input
            type="text"
            name="name"
            id="place-name-input"
            placeholder="Название"
            className="popup__input popup__input-error_margin-bottom"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error"></span>
          <input
            type="url"
            name="link"
            id="link-input"
            placeholder="Ссылка на картинку"
            className="popup__input"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
