import React from "react";
import "../../styles/AvatarOptions.css";
import avatar1 from "../../assets/PFP1.png";
import avatar2 from "../../assets/PFP2.png";
import avatar3 from "../../assets/PFP3.png";
import avatar4 from "../../assets/PFP4.png";
import avatar5 from "../../assets/PFP5.png";
import avatar6 from "../../assets/PFP6.png";
import avatar7 from "../../assets/PFP7.png";
import avatar8 from "../../assets/PFP8.png";
import avatar9 from "../../assets/PFP9.png";
import avatar10 from "../../assets/PFP10.png";
import avatar11 from "../../assets/PFP11.png";
import avatar12 from "../../assets/PFP12.png";

const avatarOptions = [
  avatar1, avatar2, avatar3, avatar4, avatar5, avatar6,
  avatar7, avatar8, avatar9, avatar10, avatar11, avatar12
];

function AvatarOptions({ onSelect, onClose }) {
  return (
    <div className="avatar-modal" onClick={onClose}>
      <div className="avatar-modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Select an Avatar</h3>
        <div className="avatar-grid">
          {avatarOptions.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Avatar ${idx + 1}`}
              className="avatar-option"
              onClick={() => onSelect(url)}
            />
          ))}
        </div>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AvatarOptions;
