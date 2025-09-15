import React from "react";

function SearchResult(props) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "49px 0px",
      }}
    >
      <h1 style={{ color: "#303030", fontSize: "3rem", padding: 0, margin: 0 , fontFamily: "Karala, sans-serif"}}>
        {props.search ? `Results for "${props.search}"` : `No Results Found!`}
      </h1>
    </div>
  );
}

export default SearchResult;
