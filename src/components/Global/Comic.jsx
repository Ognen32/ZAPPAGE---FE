import React from "react";
import "../../styles/Comic.css";
import { useNavigate } from "react-router-dom";

function Comic({ comic, width, height, fontSize, header }) {
  const navigate = useNavigate();

  const navigatorComic = () => {
    navigate(`/comic/${comic.slug}`);
  };

  // Безбедна конверзија на releaseDate
  const formattedDate = comic.releaseDate
    ? new Intl.DateTimeFormat("mk-MK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
        .format(new Date(comic.releaseDate))
        .replaceAll(".", "/")
    : "Unknown";

  const genres = comic.Genres?.map((g) => g.genre).join(", ") || "N/A";

  return (
    <div className="comicContainer" style={{ width, height, fontSize }}>
      <img src={comic.coverArt} alt="Comic cover" />
      <div className="overlay">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "19px",
            flex: 1,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700 }}>{comic.title}</h3>
            <p style={{ fontSize: 15, fontWeight: 500 }}>{comic.author}</p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                fontStyle: "italic",
                color: "#ff0000",
              }}
            >
              {genres}
            </p>
          </div>

          <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 22"
              fill="none"
            >
              <g clipPath="url(#clip0_1057_17)">
                <path
                  d="M6 1V5"
                  stroke="#4b4b4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 1V5"
                  stroke="#4b4b4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3Z"
                  stroke="#4b4b4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 9H19"
                  stroke="#4b4b4b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1057_17">
                  <rect width="20" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {formattedDate}
          </span>
        </div>

        <div className="moreInfoContainer">
          <input type="button" value="More Info" onClick={navigatorComic} />
        </div>
      </div>
    </div>
  );
}

export default Comic;
