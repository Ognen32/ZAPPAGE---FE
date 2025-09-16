import React from "react";
import AdminNavBar from "./AdminNavBar";
import Logo from "../../assets/Logo.svg";
import "../../styles/AdminView.css";
import DropdownMenu from "./AdminDropdown.jsx";
import instructionManual from "../../assets/ZAPPAGE-Instruction-Manual.pdf";

const AdminHeader = (props) => {
  return (
    <header id="home">
      <div className="logo-container">
        <img src={Logo} alt="ZAPPAGE logo" className="logo" />
      </div>

      <AdminNavBar />
      <a 
        className="adminInstructionManual"
        href={instructionManual}
        download="ZAPPAGE-Instruction-Manual.pdf"
      >
        Instruction manual
      </a>
      <DropdownMenu user={props.user} />
    </header>
  );
};

export default AdminHeader;
