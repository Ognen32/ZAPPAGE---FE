import React from "react";
import { useEffect, useState } from "react";
import Comic from "../../Global/Comic";
import GenresSelection from "./GenresSelection";
import axios from "axios";
import "../../../styles/User/SearchComics.css";

function ComicSearch({ comics }) {
  console.log(comics);
  return (
    <section id="comicSearchContainer">
  <GenresSelection />
  <div id="comicsSearchInnerContainer">
    {comics.map((comic) => (
      <div className="comicContainer" key={comic.id || comic.slug}>
        <Comic
          comic={comic}
          width="186px"
          height="257px"
          fontSize="1.6rem"
          header="2rem"
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          <h4>{comic.title}</h4>
          <span className="thisSpan">
            {comic.Genres?.length ? comic.Genres.map((g) => g.genre).join(", ") : "No genres"}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default ComicSearch;
