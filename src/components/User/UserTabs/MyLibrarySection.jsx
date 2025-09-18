import React from "react";
import "../../../styles/User/UserTabs.css";
import SVGandTitle from "./SVGandTitle";
import ComicGrid from "./ComicGridLib";
import { MyLibrary } from "./Svgs";



function MyLibrarySection({ myLibrary=[] }) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        width: "100%",
        boxSizing: "border-box",
        paddingBottom: "51px",
      }}
    >
      <div
        className="ComicsContainerFavourite scollDiv"
        style={{ overflowY: "scroll", overflowX: "hidden" }}
      >
        <SVGandTitle Image={MyLibrary} title="My Library" svgSize={44} />

         <ComicGrid comics={myLibrary} /> 
        
      </div>
    </div>
  );
}

export default MyLibrarySection;
