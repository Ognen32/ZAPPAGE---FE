import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../styles/User/UserTabs.css";
import AvatarModal from "../../Global/AvatarOptions"; 

function UpdateProfileGrid() {
  const [userData, setUserData] = useState({
    firstName: "",
    surName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    role: "user",
    avatar: "",
  });

  const [avatarPreview, setAvatarPreview] = useState("");
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((res) => {
        setUserData(res.data);
        setAvatarPreview(res.data.avatar || "/default-avatar.png");
        setLoading(false);
      })
      .catch(() => (window.location.href = "/landingPage"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarSelect = (avatarUrl) => {
    setAvatarPreview(avatarUrl);
    setUserData((prev) => ({ ...prev, avatar: avatarUrl }));
    setShowAvatarModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:3000/api/users/${userData.id}`,
        userData,
        { withCredentials: true }
      );
      setMessage("User updated successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update user.");
    }
  };

  if (loading) return <p>Loading user data...</p>;

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <div className="avatar-section">
        <img src={avatarPreview} alt="Avatar" className="avatar-image" />
        <button
          type="button"
          className="change-avatar-button"
          onClick={() => setShowAvatarModal(true)}
        >
          Change
        </button>
      </div>

      <div className="form-columns">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>E-mail Address</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            name="surName"
            value={userData.surName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={userData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit" className="save-button">
        Save Changes
      </button>
      {message && <p className="message">{message}</p>}

      {showAvatarModal && (
        <AvatarModal
          onSelect={handleAvatarSelect}
          onClose={() => setShowAvatarModal(false)}
        />
      )}
    </form>
  );
}

export default UpdateProfileGrid;
