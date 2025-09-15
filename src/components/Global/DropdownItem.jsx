import React from "react";

function DropdownItem(props) {
  const handleClick = () => {
    if (props.link) {
      window.location.href = props.link; 
    }
  };

  return (
    <div
      className="dropdown-item"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={props.image} alt={props.text} width="23" />
      <p style={{ margin: 0, padding: 0, height: "fit-content" }}>
        {props.text}
      </p>
    </div>
  );
}

export default DropdownItem;