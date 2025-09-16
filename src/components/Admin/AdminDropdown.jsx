import React, { useState } from "react";
import axios from "axios";
import DefaultAvatar from "../../assets/PFPAdmin.png"; 
import "../../styles/User/UserHeader.css";
import { position } from "stylis";

function DropdownMenu({ user, role }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const logOut = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout", { withCredentials: true });
      window.location.href = "/landingPage";
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const avatarUrl = user?.avatar || DefaultAvatar;

  return (
    <div className="dropdown-container">
      <img
        src={avatarUrl}
        alt="User Avatar"
        height="64"
        width="64"
        onClick={toggleDropdown}
        className="avatar-img"
      />
      

      {isOpen && (
        <div className="dropdown-menu">
          <div
            id="Logout-container"
          >
            <span className="logout-btn"  onClick={logOut} style={{alignSelf:"center"}}>
              Logout
            </span>
          </div>
          </div>
      )}
    </div>
  );
}

export default DropdownMenu;
