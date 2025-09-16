import React,{useState} from "react";
import borderLeft from "../../assets/border-left.png";
import borderRight from "../../assets/border-right.png";
import "../../styles/Register_Form.css";
import AvatarOptions from "../Global/AvatarOptions";

function RegisterForm({ toggleRegisterForm, closeModal }) {

  const [profilePreview, setProfilePreview] = useState(null);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const handleAvatarSelect = (url) => {
    setProfilePreview(url);
    setShowAvatarModal(false);
  };

  return (
    <div className="modal-overlay">
        <div className="center-containerRegister">
        
            <button
            className="close-btn"
            aria-label="Close register form"
            onClick={closeModal}
            >
            &#x2716;
            </button>
            <div id="centeringRegister">

       
            <div id="TitleRegister">
                <img src={borderLeft} width="110" height="10" alt="Left Border" />
                <h1 className="form-title-heading">ZAPPAGE</h1>
                <img src={borderRight} width="110" height="10" alt="Right Border" />
            </div>

                <form>
                    <div className="inputs">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="form-input"
                        />
                        <div className="name-row">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                className="form-input"
                            />
                        </div>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="form-input"
                        />
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="form-input"
                            />
                        <input
                            type="date"
                            name="dateOfBirth"
                            id="dateOfBirth"
                            placeholder="Date of Birth"
                            className="form-input"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            className="form-input"
                        />
                    </div>
                   
            </form>
            <div className="profile-container">
                <div className="profile-preview">
                {/*grey circle */}
                    {profilePreview && (
                    <img
                        src={profilePreview}
                        alt="Profile"
                        style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid #000000ff" }}
                    />
                    )}
                </div>
                <div className="pp-div">
                <div className="profile-picture">
                    <p style={{ fontSize: "20px", fontFamily:"Karla, sans-serif" }}>Choose a profile picture</p>
                    <p style={{ fontSize: "16px", fontFamily:"Karla, sans-serif" }} >You can choose between eight animated profile icons.</p>
                </div>
                <button className="browse-button" onClick={() => setShowAvatarModal(true)}>Browse</button>
                </div>
            </div>

            <div className="lower-div">
                <div className="termsofservice">
                    
                    <input type="checkbox" /> 
                    <p style={{ fontSize: "16px", fontFamily:"Karla, sans-serif" }}>I have read and agree to the Terms of Service</p>
                </div>
                <img src={borderLeft} width="400" height="10" alt="Left Border" />
                <input
                    type="submit"
                    value="SIGN UP"
                    className="submit-register"
                    aria-label="Create Account"
                />
                <p style={{ fontSize: "16px", fontFamily:"Karla, sans-serif" }}>Already have an account?
                    <span style={{ color: "#ff0000", cursor: "pointer", textDecoration: "underline" }} 
                        onClick={toggleRegisterForm}
                    >
                    Log In
                    </span>
                </p>

            </div>
            {/* Avatar Modal */}
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
