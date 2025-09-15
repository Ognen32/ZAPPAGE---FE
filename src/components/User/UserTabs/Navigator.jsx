import React from "react";
import {
  ViewProfile,
  MyLibrary,
  MyFavourite,
} from "./Svgs";
import "../../../styles/User/UserTabs.css";
import NavigatorItem from "./NavigatorItem";

function NavigatorUser({ first, second, third, svgSize }) {
  return (
    <section className="NavigatorUserContainer">
      <NavigatorItem
        color={first ? "white" : "black"}
        colorBack={first ? "#a5a5a5" : "transparent"}
        borderCol={first ? "#4b4b4b" : "black"}
        Image={ViewProfile}
        link="/user/ViewProfile"
        svgSize={svgSize}
      />
      <NavigatorItem
        color={second ? "white" : "black"}
        colorBack={second ? "#a5a5a5" : "transparent"}
        borderCol={second ? "#4b4b4b" : "black"}
        Image={MyLibrary}
        link="/user/myLibrary"
        svgSize={svgSize}
      />

      <NavigatorItem
        color={third ? "white" : "black"}
        colorBack={third ? "#a5a5a5" : "transparent"}
        borderCol={third ? "#4b4b4b" : "black"}
        Image={MyFavourite}
        link="/user/favouriteComics"
        svgSize={svgSize}
      />
    </section>
  );
}

export default NavigatorUser;
