import React from "react";
import Comics from "./ComicsOnShelfs";

function Shelf(props) {
  return (
    <div className="shelf-div">
      <Comics
        comics={props.comics}
        start={props.start}
        end={props.end}
        right={props.right}
        left={props.left}
      />
      <div
        id="shelf"
        style={{
          width: "100%",
          height: "27px",
          flexShrink: 0,
          background: "#4b4b4b",
          boxShadow: "0px 15px 10px 0px rgba(0,0,0,0.15)",
        }}
      ></div>
    </div>
  );
}

export default Shelf;