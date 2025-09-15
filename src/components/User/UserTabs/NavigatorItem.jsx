import React from "react";
import { useNavigate } from "react-router-dom";
import  "../../../styles/User/UserTabs.css";

function NavigatorItem({
  color,
  Image,
  link,
  svgSize,
  borderCol,
  colorBack,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="NavigatorItemHolder"
      style={{
        backgroundColor: colorBack ? colorBack : "transparent",
        border: borderCol ? `2px solid ${borderCol}` : "2px solid black",
      }}
      onClick={() => navigate(link)}
    >
      <Image color={color} svgSize={svgSize} />
    </div>
  );
}

export default NavigatorItem;