import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup-image">
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
    </div>
  );
}

export default ImagePopup;