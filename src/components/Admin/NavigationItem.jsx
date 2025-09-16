import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminView.css";

function NavigationItem({ color, Image, title, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="NavigatorItemAdminContainer"
      onClick={() => navigate(link)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Image color={color} />
        <p
          style={{
            color: color,
            fontSize: "1.4rem",
            fontWeight: "600",
            textWrap: "nowrap",
          }}
        >
          {title}
        </p>
      </div>
      <div
        style={{
          width: "245px",
          height: "5px",
          backgroundColor: color === "black" ? "transparent" : color,
        }}
      ></div>
    </div>
  );
}

export default NavigationItem;
