import React from "react";
import UserNavBar from "./UserNavBar";
import UserSearch from "./Search/SearchBar";
import Logo from "../../assets/Logo.svg";
import '../../styles/User/UserHeader.css';
import DropdownMenu from "../Global/DropdownMenu";

const UserHeader = (props) => {
  return (
    <header id="home">
      <div className="logo-container">
        <img src={Logo} alt="ZAPPAGE logo" className="logo" />
      </div>

      <UserNavBar/>
      <UserSearch />
      <DropdownMenu user={props.user}/>
    </header>
  );
};


export default UserHeader;
