
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <body>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <section className="popup popup-edit">
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
              id="form-edit"
              name="edit"
              className="popup__form"
              novalidate
            >
              <div className="popup__content">
                <h2 className="popup__title">Редактировать профиль</h2>
                <input
                  type="text"
                  value=""
                  name="name"
                  id="name-input"
                  className="popup__input"
                  minlength="2"
                  maxlength="40"
                  placeholder="Имя"
                  required
                />
                <span className="popup__input-error popup__input-error_margin-bottom  name-input-error"></span>
                <input
                  type="text"
                  value=""
                  name="job"
                  id="job-input"
                  className="popup__input"
                  minlength="2"
                  maxlength="200"
                  placeholder="О себе"
                  required
                />
                <span className="popup__input-error job-input-error"></span>
                <button
                  type="submit"
                  className="button popup__button button_type_save"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="popup popup-create">
          <div className="popup__container">
            <button
              type="button"
              className="popup__button-close-icon popup-icon-close-create"
            >
              <img
                src="<%=require('./images/close-icon.png')%>"
                alt="иконка крестик"
                className="popup__close-icon"
              />
            </button>
            <form
              action="#"
              id="form-add"
              name="create"
              className="popup__form"
              novalidate
            >
              <div className="popup__content">
                <h2 className="popup__title">Новое место</h2>
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
                <button
                  type="submit"
                  className="button popup__button button_type_create"
                >
                  Создать
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="popup popup-image">
          <div className="popup__container">
            <button
              type="button"
              className="popup__button-close-icon popup-icon-close-image"
            >
              <img
                src="<%=require('./images/close-icon.png')%>"
                alt="иконка крестик"
                className="popup__close-icon"
              />
            </button>
            <img src="#" alt="" className="popup__image" />
            <p className="popup__caption"></p>
          </div>
        </section>
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
      <section className="popup popup-update-avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button-close-icon popup-icon-close-create"
          >
            <img
              src="<%=require('./images/close-icon.png')%>"
              alt="иконка крестик"
              className="popup__close-icon"
            />
          </button>
          <form
            action="#"
            id="form-update-avatar"
            name="update"
            className="popup__form"
            novalidate
          >
            <div className="popup__content">
              <h2 className="popup__title">Обновить аватар</h2>
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
              <button
                type="submit"
                className="button popup__button button_type_save"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </section>
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
