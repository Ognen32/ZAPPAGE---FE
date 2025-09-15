import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import "../../../styles/User/SearchComics.css";

function GenresSelection() {
  const [genres, setGenres] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedGenres = searchParams.getAll("genre");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/genres")
      .then((res) => setGenres(res.data))
      .catch((err) => console.error("Failed to fetch genres", err));
  }, []);

  const handleGenreClick = (genreName) => {
    const newParams = new URLSearchParams(searchParams);
    const currentGenres = newParams.getAll("genre");

    if (currentGenres.includes(genreName)) {
      // Remove genre
      const updatedGenres = currentGenres.filter((g) => g !== genreName);
      newParams.delete("genre");
      updatedGenres.forEach((g) => newParams.append("genre", g));
    } else {
      // Add genre
      newParams.append("genre", genreName);
    }

    navigate(`/search?${newParams.toString()}`);
  };

  return (
    <div id="genreDivContainer">
      <div style={{ display: "flex", maxWidth: "1100px" }}>
        <Swiper
          className="genreSwiper"
          spaceBetween={0}
          slidesPerView={7}
          slidesPerGroup={2}
          centeredSlides={false}
          style={{
            padding: "20px",
            width: "100%",
            height: "fit-content",
          }}
        >
          {genres.map((genre, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                margin: 0,
              }}
            >
              <button
                value={genre.genre}
                className={`genreButton ${
                  selectedGenres.includes(genre.genre) ? "selectedGenre" : ""
                }`}
                onClick={() => handleGenreClick(genre.genre)}
              >
                {genre.genre}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GenresSelection;
