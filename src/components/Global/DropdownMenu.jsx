import React, { useState } from "react";
import axios from "axios";
import DropdownItem from "./DropdownItem";
import MyLibrary from "../../assets/MyLibrary.png";
import Profile from "../../assets/Profile.png";
import Favorite from "../../assets/Favorite.png";
import DefaultAvatar from "../../assets/PFPAdmin.png"; 

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

  // Optional chaining + default avatar
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
          <DropdownItem
            text={"View Profile"}
            image={Profile}
            link={"http://localhost:5173/user/ViewProfile"}
          />
          <DropdownItem
            text={"My Library"}
            image={MyLibrary}
            link={"http://localhost:5173/user/myLibrary"}
          />
          <DropdownItem
            text={"Favourite Comics"}
            image={Favorite}
            link={"http://localhost:5173/user/favouriteComics"}
          />

          <div
            id="Logout-container"
          >
            <span className="logout-btn"  onClick={logOut}>
              Logout
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
