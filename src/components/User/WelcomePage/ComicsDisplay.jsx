import React from "react";
import  "../../../styles/User/ComicsDisplay.css";
import lightning from "../../../assets/Lightning.png";

function ComicsDisplay(props) {
  return (
    <div className="containerItem">
      <div className="textAndButtonsContainer">
        <div className="textContainer">
          <div className="title">
            <h3>{props.author}</h3>
            <h2>{props.title}</h2>
            <div id="containerGenres">
              {props.genres &&
                props.genres.map((genre, index) => {
                  return (
                    <p key={index} className="genre">
                      {genre}
                    </p>
                  );
                })}
            </div>
          </div>
          <p>{props.text}</p>
        </div>
        <div className="button-div" style={{ gap: "60px" }}>
          <button  className="buttons1">Read</button>
          <button  className="buttons2">More Info &gt;</button>
        </div>
      </div>
      <div className="bookVines">
        <img src={props.comic} alt="" width="290" height="446" />
        <img
          src={lightning}
          alt=""
          width="350"
          height="350"
          style={{ position: "absolute", left: "-200px", bottom: "150px" }}
          className="lightning"
        />
      </div>
    </div>
  );
}

export default ComicsDisplay;
