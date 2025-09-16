import React from "react";
import { useEffect, useState } from "react";
import borderLeft from "../../assets/border-left.png";
import borderRight from "../../assets/border-right.png";
import axios from "axios";
import "../../styles/Login_Form.css";
import Buttons from "./Buttons";

function LoginForm(props) {
  const [error, setError] = useState(null);
  const [isCorrect, SetCorrect] = useState(false);
  const errorStyle = {
    border: "3px solid red",
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      console.log("Email:", email, "Password:", password);
      const response = await axios.post(
        "http://localhost:3000/api/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      SetCorrect(false); 
      console.log("Login Success:", response.data);
       if (response.data.user.role === "admin") {
        window.location.href = "/admin/ComicManagement"; 
      } else {
        window.location.href = "/welcomeUser"; 
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed");
        SetCorrect(true); 
      } else {
        setError("Network or server error");
        SetCorrect(true);
      }
    }
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
        onClick={props.closeModal}
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
          method="post"
          id="loginForm"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="username"
            style={{ color: "red", fontWeight: "600", fontSize: "1.6rem" }}
          >
            {isCorrect ? "Incorrect username " : ""}
          </label>
          <div className="inputs">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="form-input"
            style={isCorrect ? errorStyle : {}}
          />

          <label htmlFor="password"  style={{ color: "red", fontWeight: "600", fontSize: "1.6rem" }}> {isCorrect ? "Incorrect password " : ""}</label>
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
              className="submit-register"
              aria-label="Create Account"
              onClick={props.toggleLoginForm}
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;