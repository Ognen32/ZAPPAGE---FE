import React from "react";
import { useState } from "react";
import LoginForm from "./Login_Form";

function NavBar() {

  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <nav id="nav">
      <a href="#home">Home</a>
      <a href="#trending">Trending</a>
      <a href="#catalog">Catalog</a>
      <a href="#account" onClick={(e) => { e.preventDefault(); toggleLoginForm(); }}>My Account</a>
      {showLogin && <LoginForm toggleLoginForm={toggleLoginForm} />}
      <a href="#contact">Contact Us</a>
    </nav>
  );
}

export default NavBar;