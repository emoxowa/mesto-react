import React from "react";
import logo from "../images/Logo.svg";

	function Header() {
    return (
      <header className="header">
        <a href="#">
          <img src={logo} alt="Логотип" className="logo" />
        </a>
      </header>
    );
}
  
	export default Header;