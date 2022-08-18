import React from "react";
import pencil from "../images/Pencil.svg";
import plus from "../images/Plus.svg";

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <div className="profile__avatar-container">
            <button
              className="profile__avatar-edit-button"
              type="button"
            ></button>
            <img src=" " alt="аватар" className="profile__avatar" />
          </div>
          <div className="profile__info">
            <div className="profile__name-edit">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button type="button" className="button button_type_edit">
                <img src={pencil} alt="карандаш" />
              </button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="button button_type_add">
          <img src={plus} />
        </button>
      </section>
      <section className="cards"></section>
    </main>
  );
}

	export default Main;