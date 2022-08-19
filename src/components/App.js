
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
  }


  return (
    <body>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
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
            value=""
            name="avatar"
            id="avatar-input"
            placeholder="Ссылка на аватарку"
            className="popup__input popup__input_type_url"
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
            value=""
            name="name"
            id="name-input"
            class="popup__input"
            minlength="2"
            maxlength="40"
            placeholder="Имя"
            required
          />
          <span class="popup__input-error popup__input-error_margin-bottom  name-input-error"></span>
          <input
            type="text"
            value=""
            name="job"
            id="job-input"
            class="popup__input"
            minlength="2"
            maxlength="200"
            placeholder="О себе"
            required
          />
          <span class="popup__input-error job-input-error"></span>
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
            value=""
            name="name"
            id="place-name-input"
            placeholder="Название"
            className="popup__input popup__input_type_card-name"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="popup__input-error popup__input-error_margin-bottom place-name-input-error"></span>
          <input
            type="url"
            value=""
            name="link"
            id="link-input"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_url"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
        
        <ImagePopup/>



        
        <section className="popup popup-delete">
          <div className="popup__container">
            <button
              type="button"
              className="popup__button-close-icon popup-icon-close-edit"
            >
              <img
                src="<%=require('./images/close-icon.png')%>"
                alt="иконка крестик"
                className="popup__close-icon"
              />
            </button>
            <form
              action="#"
              id="form-delete"
              name="delete"
              className="popup__form"
              novalidate
            >
              <div className="popup__content">
                <h2 className="popup__title">Вы уверены?</h2>
                <button
                  type="submit"
                  className="button popup__button button_type_delete"
                >
                  Да
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <template id="card-template">
        <div className="card">
          <button type="button" className="card__button-remove"></button>
          <img src="#" alt="" className="card__image" />
          <div className="card__body">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button type="button" className="card__button-like"></button>
              <p className="card__like-counter"></p>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;
