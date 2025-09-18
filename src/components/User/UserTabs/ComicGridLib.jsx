import React from "react";
import "../../../styles/User/UserTabs.css";
import Comic from "../../Global/Comic";

function ComicsGrid({ comics }) {
   
  return (
    <div className="comicsGridContainer">
      {comics.map((comic, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "fit-content",
              width: "fit-content",
              gap: "1px",
            }}
          >
            <Comic
              comic={comic.Comic}
              width="186px"
              height="257px"
              fontSize="1.6rem"
              header="2rem"
              progressBar= {comic.currentPageNumber}
            />
            <h3
              style={{
                color: "#fff",
                margin: 0,
                padding: 0,
                fontSize: "1.2rem",
                textWrap: "nowrap",
                maxWidth: "180px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                marginLeft: "3px",
                fontWeight: 700,
              }}
            >
              {comic.title}
            </h3>
            <p
              style={{
                color: "#fff",
                margin: 0,
                padding: 0,
                fontSize: "1rem",
                textWrap: "nowrap",
                maxWidth: "180px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                marginLeft: "3px",
                fontWeight: 600,
              }}
            >
              {comic.Genres?.map((genre) => genre.genre).join(", ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ComicsGrid;
