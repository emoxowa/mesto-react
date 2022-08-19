
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen, setIsPopupAvatarOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsPopupProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsPopupAddPlaceOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});


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


  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
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
    </div>
  );
}

export default App;
