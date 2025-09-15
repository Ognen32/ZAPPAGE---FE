import React from "react";
import "../../../styles/User/UserTabs.css";
import SVGandTitle from "./SVGandTitle";
import ComicGrid from "./ComicGrid";
import { MyFavourite } from "./Svgs";

function FavoriteComicsSection({ favourites }) {
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
      <div className="ComicsContainerFavourite">
        <SVGandTitle
          Image={MyFavourite}
          title="Favorite Comics"
          svgSize={44}
        />
       <ComicGrid comics={favourites} /> 
      </div>
    </div>
  );
}

export default FavoriteComicsSection;
