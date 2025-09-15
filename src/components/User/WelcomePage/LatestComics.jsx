import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import "../../../styles/User/LatestComics.css";
import Comic from "../../Global/Comic";

function LatestComics() {
  const [comicData, setComicData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/latestComics")
      .then((response) => {
        const data = response.data;
        console.log(data[0].coverArt);
        setComicData(data);
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }, []);

  return (
    <section id="containerLatestComics">
      <div id="containerLatestComicsInner">
        <h2>Latest Comics</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={1}
          centeredSlides={false}
          style={{
            padding: "20px 20px",
            width: "100%",
            height: "fit-content",
            display: "flex",
          }} 
        >
          {comicData.map((comic, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="holderComicDiv">
                <div className="titleAndNumDiv">
                  <span>{index + 1}</span>
                  <span className="verticalTitle">{comic.title}</span>
                </div>
                <Comic
                  comic={comic}
                  width="186px"
                  height="257px"
                  fontSize="1.6rem"
                  header="2rem"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LatestComics;
