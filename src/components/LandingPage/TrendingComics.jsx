import React from "react";
import Shelfs from "./Shelfs";

function TrendingComics({ comics = [] }) {
  return (
    <div id="trending" className="trending-div">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "3.5rem",
            margin: 0,
            lineHeight: "normal",
            fontWeight: 400,
            fontFamily: "sans-serif",
            fontStyle: "Karla"
          }}
        >
          Comics
        </h2>
        <p
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            margin: 0,
           fontFamily: "Karla, sans-serif"
          }}
        >
          Trending Comics
        </p>
      </div>
      <Shelfs comics={comics} />
    </div>
  );
}

export default TrendingComics;
