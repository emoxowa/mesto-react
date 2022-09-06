import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
  const [isEditProfilePopupOpen, setIsPopupProfileOpen] = useState(false);



  return (
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
  );
}

export default EditProfilePopup;
