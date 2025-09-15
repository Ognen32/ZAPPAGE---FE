import React from "react";

function SvgContainer({ Image, title, svgSize }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "fit-content",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Image color="white" svgSize={svgSize} />
        <h1
          style={{
            color: "white",
            margin: 0,
            padding: 0,
            fontSize: "4rem",
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: "normal",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default SvgContainer;