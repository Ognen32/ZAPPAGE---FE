import React from "react";
import Bomb1 from "../../assets/Bomb1.webp";
import Bomb2 from "../../assets/Bomb2.png";

function Comics({ comics = [], start = 0, end = comics?.length || 0, right, left }) {
  return (
    <div
      className="TrendingComic"
      style={{
        position: "relative", 
        display: "flex",
        gap: "10px", 
        flexWrap: "wrap",
      }}
    >
      {comics?.length > 0 ? (
        comics.slice(start, end).map((item, index) => (
          <img
            key={index}
            src={item.coverArt}
            alt={item.title || "comic cover"}
            width="174"
            height="270"
            style={{
              boxShadow: "10px 0px 5px 0px rgba(0,0,0, 0.15)",
              objectFit: "cover",
            }}
          />
        ))
      ) : (
        <p style={{ color: "#999" }}>No comics available</p>
      )}

      {right === "yes" && (
        <img
          src={Bomb1}
          alt="bomb right"
          className="bomb"
          style={{
            width: "170px",
            height: "138px",
            position: "absolute",
            right: -50,
            bottom: 0,
          }}
        />
      )}

      {left === "yes" && (
        <img
          src={Bomb2}
          alt="bomb left"
          className="bomb"
          style={{
            width: "142px",
            height: "142px",
            position: "absolute",
            left: -30,
            bottom: -5,
          }}
        />
      )}
    </div>
  );
}

export default Comics;