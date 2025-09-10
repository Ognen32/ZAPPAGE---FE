import React from "react";
import Bomb1 from "../../assets/Bomb1.webp";
import Bomb2 from "../../assets/Bomb2.png";

function Comics(props) {
  return (
    <div className="TrendingComic">
      {props.comics
        .slice(props.start, props.end) 
        .map((item, index) => (
          <img
            key={index}
            src={item.coverArt}
            alt={item.title}
            width="174px"
            height="250px"
            style={{
              boxShadow: "10px 20px 5px 0px rgba(0,0,0, 0.15)",
            }}
          />
        ))}
      {props.right === "yes" && (
        <img
          src={Bomb1}
          alt="bomb"
          style={{
            width: "170px",
            height: "138px", 
            position: "absolute", 
            right: -50, 
            bottom: -55,
          }}
        />
      )}
      {props.left === "yes" && (
        <img
          src={Bomb2}
          alt="bomb"
          style={{
            width: "142px",
            height: "142px", 
            position: "absolute", 
            left: 0, 
            bottom: -10,
          }}
        />
      )}
    </div>
  );
}

export default Comics;
