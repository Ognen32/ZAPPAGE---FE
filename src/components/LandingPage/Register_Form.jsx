import React, { useState } from "react";
import borderLeft from "../../assets/border-left.png";
import borderRight from "../../assets/border-right.png";
import "../../styles/Register_Form.css";
import AvatarOptions from "../Global/AvatarOptions";
import axios from "axios";

function RegisterForm({ toggleRegisterForm, closeModal }) {
  const [profilePreview, setProfilePreview] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(""); // URL од AvatarOptions
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [error, setError] = useState({});
  const [isError, setIsError] = useState(false);

  const errorStyle = {
    border: "2px solid red",
  };

  const handleAvatarSelect = (url) => {
    setProfilePreview(url);
    setAvatarUrl(url); // зачувуваме URL за backend
    setShowAvatarModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const registerResponse = await axios.post(
        "http://localhost:3000/api/register",
        {
          userName: form.username.value,
          firstName: form.firstName.value,
          surName: form.lastName.value,
          email: form.email.value,
          password: form.password.value,
          dateOfBirth: form.dateOfBirth.value,
          phoneNumber: form.phoneNumber.value,
          role: "user",        // фиксно role
          avatar: avatarUrl,   // испраќаме URL од AvatarOptions
        },
        { withCredentials: true }
      );

      setIsError(false);
      window.location.href = "/welcomeUser";
    } catch (err) {
      const fieldErrors = {};
      const msg = err.response?.data?.message || "Network or server error";

      if (msg.toLowerCase().includes("username")) fieldErrors.username = msg;
      else if (msg.toLowerCase().includes("email")) fieldErrors.email = msg;
      else if (msg.toLowerCase().includes("password")) fieldErrors.password = msg;
      else fieldErrors.general = msg;

      setError(fieldErrors);
      setIsError(true);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) closeModal();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="center-containerRegister">
        <button className="close-btn" onClick={closeModal}>&#x2716;</button>
        <div id="centeringRegister">
          <div id="TitleRegister">
            <img src={borderLeft} width="110" height="10" alt="Left Border" />
            <h1 className="form-title-heading">ZAPPAGE</h1>
            <img src={borderRight} width="110" height="10" alt="Right Border" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-input"
                style={error.username ? errorStyle : {}}
                required
              />
              {error.username && <label style={{ color: "red" }}>{error.username}</label>}

              <div className="name-row">
                <input type="text" name="firstName" placeholder="First Name" className="form-input" required />
                <input type="text" name="lastName" placeholder="Last Name" className="form-input" required />
              </div>

              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-input"
                style={error.email ? errorStyle : {}}
                required
              />
              {error.email && <label style={{ color: "red" }}>{error.email}</label>}

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                style={error.password ? errorStyle : {}}
                required
              />
              {error.password && <label style={{ color: "red" }}>{error.password}</label>}

              <input type="date" name="dateOfBirth" placeholder="Date of Birth" className="form-input" required />
              <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-input" />
            </div>

            <div className="profile-container">
              <div className="profile-preview">
                {profilePreview && (
                  <img
                    src={profilePreview}
                    alt="Profile"
                    style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid #000" }}
                  />
                )}
              </div>
              <div className="pp-div">
                <div className="profile-picture">
                  <p style={{ fontSize: "20px", fontFamily: "Karla, sans-serif" }}>Choose a profile picture</p>
                  <p style={{ fontSize: "16px", fontFamily: "Karla, sans-serif" }}>You can choose between eight animated profile icons.</p>
                </div>
                <button type="button" className="browse-button" onClick={() => setShowAvatarModal(true)}>Browse</button>
              </div>
            </div>

            <div className="lower-div">
              <div className="termsofservice">
                <input type="checkbox" required />
                <p style={{ fontSize: "16px", fontFamily: "Karla, sans-serif" }}>I have read and agree to the Terms of Service</p>
              </div>
              <img src={borderLeft} width="400" height="10" alt="Left Border" />
              <input type="submit" value="SIGN UP" className="submit-register" />
              <p style={{ fontSize: "16px", fontFamily: "Karla, sans-serif" }}>
                Already have an account?{" "}
                <span style={{ color: "#ff0000", cursor: "pointer", textDecoration: "underline" }} onClick={toggleRegisterForm}>Log In</span>
              </p>
              {error.general && <p style={{ color: "red" }}>{error.general}</p>}
            </div>
          </form>

          {showAvatarModal && (
            <AvatarOptions
              onSelect={handleAvatarSelect}
              onClose={() => setShowAvatarModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
