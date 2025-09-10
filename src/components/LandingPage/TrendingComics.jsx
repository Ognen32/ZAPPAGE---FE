import React from "react";
import Shelfs from "./Shelfs";

function TrendingComics(props) {
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
            fontSize: "4.8rem",
            margin: 0,
            lineHeight: "normal",
            fontWeight: 700,
          }}
        >
          Comics
        </h2>
        <p
          style={{
            color: "#fff",
            fontSize: "2.4rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            margin: 0,
          }}
        >
          Trending Comics
        </p>
      </div>
      <Shelfs comics={props.comics} />
    </div>
  );
}

export default TrendingComics;
