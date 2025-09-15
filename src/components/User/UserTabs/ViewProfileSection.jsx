import React from "react";
import "../../../styles/User/UserTabs.css";
import SvgContainer from "./SVGandTitle";
import { ViewProfile } from "./Svgs";
import UpdateProfileGrid from "./UpdateProfileGrid";

function ViewProfileSection({  }) {
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
        <SvgContainer
          Image={ViewProfile}
          title="View Profile"
          svgSize={44}
        />
      <UpdateProfileGrid/>
      </div>
    </div>
  );
}

export default ViewProfileSection;