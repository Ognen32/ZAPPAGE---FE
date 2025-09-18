import React, { useState } from "react";
import axios from "axios";
import "../../styles/AdminView.css";
import AvatarModal from "../Global/AvatarOptions";

function UpdateUserForm({ userData, onClose, onSuccess }) {
  const [firstName, setFirstName] = useState(userData.firstName || "");
  const [surName, setSurName] = useState(userData.surName || "");
  const [userName, setUserName] = useState(userData.userName || "");
  const [email, setEmail] = useState(userData.email || "");
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || "");
  const [avatar, setAvatar] = useState(userData.avatar || null);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [error, setError] = useState("");

  const handleAvatarSelect = (avatarUrl) => {
    setAvatar(avatarUrl);
    setShowAvatarModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const updatedData = { firstName, surName, userName, email, phoneNumber, avatar };
    try {
      await axios.patch(`http://localhost:3000/api/users/${userData.id}`, updatedData, {
        withCredentials: true,
      });
      onSuccess?.();
      onClose?.();
    } catch (err) {
      console.error(err);
      setError("Failed to update user.");
    }
  };

  return (
    <form className="updateUserForm" onSubmit={handleSubmit}>
      {error && <div className="updateFormError">{error}</div>}

      <div className="updateFormGrid">
        {/* Поле 1 */}
        <div className="formField">
          <label>First Name</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>

        {/* Аватарот */}
        <div className="updateAvatarSection">
          <img src={avatar} alt="Avatar" />
          <button
            type="button"
            className="changeAvatarButton"
            onClick={() => setShowAvatarModal(true)}
          >
            Change
          </button>
        </div>

        {/* Поле 2 */}
        <div className="formField">
          <label>Last Name</label>
          <input value={surName} onChange={(e) => setSurName(e.target.value)} />
        </div>

        {/* Поле 3 */}
        <div className="formField">
          <label>Username</label>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>

        {/* Поле 4 */}
        <div className="formField">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {/* Поле 5 */}
        <div className="formField">
          <label>Phone</label>
          <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
      </div>

      {/* Save / Cancel копчиња */}
      <div className="updateFormButtons">
        <button type="submit" className="submitButton">Save</button>
        <button type="button" className="cancelButton" onClick={onClose}>Cancel</button>
      </div>

      {showAvatarModal && (
        <AvatarModal
          onSelect={handleAvatarSelect}
          onClose={() => setShowAvatarModal(false)}
        />
      )}
    </form>
  );
}

export default UpdateUserForm;
