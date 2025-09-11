import React from "react";
import NavBar from "./NavBar";
import Logo from "../../assets/Logo.svg";
const Header = () => {
  return (
    <header id="home">
      <div className="logo-container">
        <img src={Logo} alt="ZAPPAGE logo" className="logo" />
      </div>

      <NavBar></NavBar>
    </header>
  );
};

export default Header;
