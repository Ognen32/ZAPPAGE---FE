import React, { useState, useEffect } from "react";
import axios from "axios";

function SVGTitleAndSearchContainer({
  Image,
  title,
  svgSize,
  showAddBookForm,
  errorMessage,
  successMessage,
}) {
  const [search, setSearch] = useState("");
  const [comics, setComics] = useState([]);

  // Fetch comics by title only
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!search || search.trim() === "") {
        setComics([]);
        return;
      }

      axios
        .get("http://localhost:3000/api/search", {
          params: { title: search },
          withCredentials: true,
        })
        .then((res) => setComics(res.data))
        .catch((err) => {
          console.error("Error fetching comics:", err.response?.data?.error);
          setComics([]);
        });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
      }}
    >
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
              fontSize: "3rem",
              fontWeight: "700",
              fontStyle: "normal",
              lineHeight: "normal",
              fontFamily: "Karla, sans-serif",
            }}
          >
            {title}
          </h1>
        </div>

        {!showAddBookForm && (
          <div
            style={{
              display: "flex",
              width: "300px",
              height: "fit-content",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "7px",
              border: "1.5px solid #303030",
              padding: "3px 7px",
              boxSizing: "border-box",
            }}
          >
            <svg
              style={{ paddingRight: "3px", cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M3.54608 10.3826C4.71338 13.3979 7.86561 14.8762 10.5179 13.8495C13.1702 12.8227 14.5052 9.6071 13.3379 6.59188C12.1706 3.57665 9.01839 2.09827 6.36611 3.12506C3.71382 4.15185 2.37878 7.36742 3.54608 10.3826Z"
                fill="#FFFAFA"
                stroke="#757272"
                strokeWidth="1.5"
              />
              <line
                y1="-1"
                x2="8.60233"
                y2="-1"
                transform="matrix(0.728709 0.684824 0.684824 -0.728709 13.2253 12.5332)"
                stroke="#757272"
                strokeWidth="2"
              />
            </svg>
            <input
              type="text"
              name="Search"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#878787",
                outline: "none",
              }}
            />
          </div>
        )}
      </div>

      {comics.length > 0 && (
        <div style={{ marginTop: "10px", color: "#fff" }}>
          <h3>Results:</h3>
          <ul>
            {comics.map((comic) => (
              <li key={comic.id}>
                {comic.title} by {comic.author}
              </li>
            ))}
          </ul>
        </div>
      )}

      {errorMessage && (
        <p
          style={{
            color: "#ff0000",
            margin: 0,
            padding: 0,
            fontSize: "1.5rem",
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          {errorMessage}
        </p>
      )}

      {["Waiting", "Waiting.", "Waiting..", "Waiting..."].includes(
        successMessage
      ) && (
        <p
          style={{
            color: "#fff",
            margin: 0,
            padding: 0,
            fontSize: "1.5rem",
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          {successMessage}
        </p>
      )}

      {successMessage === "success" && (
        <p
          style={{
            color: "#0000dc",
            margin: 0,
            padding: 0,
            fontSize: "1.5rem",
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          Success!{" "}
          <a
            href="http://localhost:5173/admin/ComicManagement"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "white",
            }}
          >
            Click to Return to Previous Page.
          </a>
        </p>
      )}
    </div>
  );
}

export default SVGTitleAndSearchContainer;
