import React, { useEffect, useState } from "react";
import "../../../styles/User/ComicView.css";
import axios from "axios";

// SVG компоненти
const FavouriteIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 22 20" fill="none">
    <g clipPath="url(#clip0_1089_927)">
      <path
        d="M10.91 19.75H10.66C10.1384 19.0668 9.5261 18.4578 8.84002 17.94C6.84002 16.13 4.78002 14.34 2.84002 12.5C1.30568 11.0907 0.326606 9.17868 0.0800167 7.11C-0.309983 4.22 0.700017 1.89 2.91002 0.68C3.94829 0.122024 5.13423 -0.0997339 6.30398 0.0453647C7.47372 0.190463 8.56953 0.695256 9.44002 1.49C9.95002 1.93 10.44 2.49 10.88 2.94C11.35 2.44 11.8 1.94 12.31 1.45C15.37 -1.31 20.67 0.0899999 21.42 4C21.94 6.69 21.69 9.41 19.69 11.65C17 14.63 13.73 16.94 10.91 19.75Z"
        fill={props.fillColor}
        stroke={props.strokeColor || "none"}
        strokeWidth={props.strokeWidth || "0"}
      />
    </g>
    <defs>
      <clipPath id="clip0_1089_927">
        <rect width="21.65" height="19.75" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ShareButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 19 19" fill="none">
    <g clipPath="url(#clip0_1094_933)">
      <path
        d="M4.60818e-05 9.1C-0.00319521 8.43917 0.164604 7.78874 0.487131 7.21196C0.809658 6.63517 1.27594 6.15165 1.84064 5.8084C2.40534 5.46515 3.04925 5.27385 3.70976 5.2531C4.37027 5.23236 5.02492 5.38287 5.61005 5.69C5.94784 5.91058 6.34445 6.02385 6.74779 6.01492C7.15113 6.006 7.54234 5.8753 7.87005 5.64C8.29289 5.39296 8.73421 5.17899 9.19005 5C9.55778 4.8867 9.87952 4.65854 10.1081 4.34899C10.3367 4.03944 10.46 3.66479 10.46 3.28C10.5907 2.45377 10.9809 1.69056 11.5742 1.10087C12.1675 0.511177 12.933 0.125614 13.76 3.59491e-07C14.5693 -0.0964317 15.3886 0.0604827 16.105 0.449123C16.8214 0.837764 17.3996 1.439 17.76 2.17C18.1211 2.89999 18.242 3.72547 18.1055 4.52835C17.969 5.33123 17.5821 6.07036 17 6.64C16.4136 7.232 15.6454 7.60997 14.8186 7.71333C13.9917 7.81668 13.1541 7.63944 12.44 7.21C12.1764 7.02038 11.8598 6.91836 11.535 6.91836C11.2103 6.91836 10.8937 7.02038 10.63 7.21C9.92005 7.62 9.14005 7.92 8.42005 8.32C7.70005 8.72 7.50005 9.39 8.31005 9.84C9.12005 10.29 10.08 10.71 10.95 11.17C11.54 11.48 11.95 11.17 12.43 10.9C13.2388 10.4269 14.1967 10.2774 15.1112 10.4814C16.0257 10.6855 16.8291 11.228 17.36 12C17.9153 12.754 18.1752 13.6853 18.0904 14.6179C18.0056 15.5505 17.5821 16.4197 16.9 17.0612C16.2178 17.7028 15.3243 18.0721 14.3882 18.0996C13.4522 18.127 12.5386 17.8105 11.82 17.21C11.4196 16.9157 11.088 16.5379 10.848 16.1028C10.608 15.6677 10.4654 15.1857 10.43 14.69C10.4409 14.3617 10.3399 14.0395 10.1437 13.7761C9.94751 13.5126 9.66768 13.3236 9.35005 13.24C8.92848 13.075 8.52336 12.8708 8.14005 12.63C7.75365 12.3414 7.28897 12.1764 6.80708 12.1568C6.3252 12.1372 5.84864 12.2638 5.44005 12.52C4.86114 12.794 4.2225 12.9177 3.58315 12.8796C2.9438 12.8414 2.32439 12.6427 1.78216 12.3018C1.23993 11.961 0.792381 11.4889 0.480893 10.9292C0.169406 10.3696 0.00402751 9.74047 4.60818e-05 9.1Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_1094_933">
        <rect width="18.11" height="18.12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CommentButton = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 21 19" fill="none">
    <g clipPath="url(#clip0_1096_937)">
      <path
        d="M20.52 6.31V10.51C20.0508 11.6027 19.413 12.615 18.63 13.51C17.2439 14.8996 15.5214 15.9063 13.6304 16.4321C11.7394 16.9578 9.74447 16.9847 7.84002 16.51C7.3637 16.3473 6.85775 16.2899 6.35708 16.3417C5.85642 16.3935 5.37294 16.5532 4.94002 16.81C4.16962 17.2873 3.32953 17.6415 2.45002 17.86C1.73002 18.06 0.800015 18.48 0.240015 17.8C-0.319985 17.12 0.660015 16.62 0.960015 16.07C1.72002 14.68 2.18002 13.51 1.08002 11.91C-0.749985 9.22 -0.149985 5.91 2.08002 3.42C6.82001 -1.81 17.51 -1.19 20.52 6.31Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_1096_937">
        <rect width="20.52" height="18.17" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Главна компонента за копчиња
function ShareFavCommentButtons({ comic, user, commentsRef }) {
  const [isFavourite, setIsFavourite] = useState(false);

  // Проверка дали е фаворит
  useEffect(() => {
    if (!comic || !comic.id) return;

    axios
      .post("http://localhost:3000/api/favourite/check", { comicId: comic.id }, { withCredentials: true })
      .then((res) => setIsFavourite(res.data.exists))
      .catch((err) => console.log("Error checking favourite:", err));
  }, [comic, user]);

  // Toggle favourite веднаш
  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev); // веднаш менување
    axios
      .post("http://localhost:3000/api/favourite", { comicId: comic.id }, { withCredentials: true })
      .catch((err) => {
        console.log("Error toggling favourite:", err);
        setIsFavourite((prev) => !prev); // враќање ако грешка
      });
  };

  // Scroll до коментари
  const scrollToComments = () => {
    if (commentsRef && commentsRef.current) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="svgButtonsContainer">
      <div className="sideButtons">
        <div className="svgHolder" onClick={toggleFavourite}>
          <FavouriteIcon
            fillColor={isFavourite ? "#ff0000" : "none"}
            height="20"
            width="20"
            strokeWidth="1"
            strokeColor={isFavourite ? "#ff0000" : "#000"}
          />
        </div>
        <div className="svgHolder">
          <ShareButton color="black" height="20" width="20" />
        </div>
        <div className="svgHolder" onClick={scrollToComments}>
          <CommentButton color="black" height="20" width="20" />
        </div>
      </div>
    </div>
  );
}

export default ShareFavCommentButtons;
