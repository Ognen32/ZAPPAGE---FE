import React from "react";
import "../../../styles/User/Reviews.css";
import fire from "../../../assets/fire.png";

function ReviewItem(props) {
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 44 41"
      fill="none"
    >
      <g clipPath="url(#clip0_1063_452)">
        <path
          d="M17.64 6.7C14.84 12.5 14.54 12.9 13.04 13.2C12.14 13.3 9.14001 13.8 6.24001 14.2C3.34001 14.6 0.84001 15.2 0.54001 15.5C0.24001 15.8 1.74001 17.7 5.24001 21L10.34 26L9.24001 32.9C8.64001 36.7 8.24001 40 8.54001 40.2C8.84001 40.4 11.74 39.1 15.24 37.3L21.54 34L27.84 37.3C31.24 39.1 34.34 40.4 34.54 40.2C34.74 40 34.44 36.7 33.84 32.9L32.74 26.1L37.84 21C41.44 17.6 42.84 15.8 42.54 15.5C42.24 15.2 39.04 14.6 35.34 14C31.64 13.4 28.64 13 28.54 12.9C28.44 12.8 27 10 25.44 6.6C23.44 2.6 22.14 0.5 21.64 0.5C20.94 0.5 19.64 2.6 17.64 6.7Z"
          fill="#ffff00"
          stroke="#000"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_1063_452">
          <rect width="43.08" height="40.72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className="reviewContainer">
      <img
        className="fire"
        src={fire}
        alt=""
        width={317.5}
        height={180}
        style={{ position: "absolute", top: -100, borderTopRightRadius: 130}}
      />
      <img
        src={props.avatar}
        alt=""
        width={120}
        height={120}
        style={{ position: "absolute", top: -55 , borderRadius: 100}}
      />
      <h2>{props.user}</h2>
      <p>{props.text}</p>
      <div className="starHolder">
        {Array.from({ length: props.stars }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
    </div>
  );
}

export default ReviewItem;
