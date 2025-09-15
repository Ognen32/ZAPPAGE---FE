import React from "react";
import { useEffect, useState } from "react";

import borderLeft from "../../assets/border-left.png";
import borderRight from "../../assets/border-right.png";

import "../../styles/Login_Form.css";
import Buttons from "./Buttons";

function LoginForm(props) {
  const [error, setError] = useState(null);
  const [isCorrect, SetCorrect] = useState(false);
  const errorStyle = {
    border: "3px solid red",
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Login form submitted");
};

  
  return (
    <div className="modal-overlay">
    <div
      id="center-containerLogin"
      className={`zoomIn ${isCorrect ? "errorStyle" : ""}`}
    >
      <button
        className="close-btn"
        aria-label="Close login form"
        onClick={props.toggleLoginForm}
      >
        &#x2716; {/* Unicode X character */}
      </button>
     
      <div id="centeringLogin">
        <div id="TitleLogin">
          <img src={borderLeft} width="110" height="10" alt="Left Border" />
          <h1 className="form-title-heading">ZAPPAGE</h1>
          <img src={borderRight} width="110" height="10" alt="Right Border" />
        </div>

        <form
          action="/login_user"
          method="post"
          id="loginForm"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="Entering Username"
            style={{ color: "red", fontWeight: "600", fontSize: "1.6rem" }}
          >
            {isCorrect ? "Incorrect username or password " : ""}
          </label>
          <div className="inputs">
          <input
            type="text"
            name="email"
            id="username"
            placeholder="Username"
            className="form-input"
            style={isCorrect ? errorStyle : {}}
          />

          <label htmlFor="Entering password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-input"
            style={isCorrect ? errorStyle : {}}
          />
          </div>
          <div className="remember-me-row">
            <label htmlFor="remember" className="remember-label">
              Remember Me!
            </label>
            <label className="switch">
              <input type="checkbox" id="remember" />
              <span className="slider" />
            </label>
          </div>

          <div id="lower-centered">
            <input type="submit" 
              value="Log In" 
              className="submit-login"
              aria-label="Log In" 
             />
           
            <a href="/reset_password" className="forgot-password-link">
              Forgot Password?
            </a>

            <div id="or_div">
              <img src={borderLeft} width="147" height="10" alt="Left Border" />
              <h1 className="or-text">OR</h1>
              <img
                src={borderLeft}
                width="147"
                height="10"
                alt="Right Border"
              />
            </div>
            <p className="No-account">Don't have an account?</p>
            <input
              type="submit"
              value="SIGN UP"
              formAction="/create_account"
              className="submit-register"
              aria-label="Create Account"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;