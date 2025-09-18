import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminView.css";

function ComicsList({ onUpdateClick }) {
  const [comics, setComics] = useState([]);
  const [comicToDelete, setComicToDelete] = useState(null); 

  useEffect(() => {
    fetchComics();
  }, []);

  const fetchComics = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/comics");
      setComics(res.data);
    } catch (err) {
      console.error("Failed to fetch comics", err);
    }
  };

  const handleDeleteClick = (comic) => {
    setComicToDelete(comic); 
  };

  const confirmDelete = async () => {
    if (!comicToDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/api/deleteComic/${comicToDelete.id}`
      );
      setComicToDelete(null);
      fetchComics(); 
    } catch (err) {
      console.error("Failed to delete comic:", err);
      setComicToDelete(null);
    }
  };

  const cancelDelete = () => setComicToDelete(null);

  return (
    <div className="comicsListContainer">
      {comics.map((comic, index) => (
        <React.Fragment key={comic.id}>
          <div className="comicRow">
            <div className="comicId">{comic.id}</div>
            <div className="comicCover">
              <img src={comic.coverArt} alt={comic.title} />
            </div>
            <div className="comicTitle">{comic.title}</div>
            <div
              className="comicActions"
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <button className="updateButton" onClick={() => onUpdateClick(comic)}>
                Update
              </button>

              <button className="deleteButton" onClick={() => handleDeleteClick(comic)}>
                Delete
              </button>
            </div>
          </div>

          {index !== comics.length - 1 && <hr className="comicDivider" />}
        </React.Fragment>
      ))}

      {/* Confirmation popup */}
      {comicToDelete && (
        <div className="popupOverlay">
          <div className="popupContent">
            <div style={{ marginBottom: "15px" }}>
              <svg
                width="95"
                height="112"
                viewBox="0 0 95 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="47.5"
                  cy="56.5"
                  r="46"
                  fill="white"
                  stroke="#FF0000"
                  strokeWidth="3"
                />
                <path
                  d="M44.6515 71.104L43.6915 27.904H51.6595L50.6995 71.104H44.6515ZM47.6755 88.864C46.0435 88.864 44.6995 88.352 43.6435 87.328C42.5875 86.304 42.0595 85.024 42.0595 83.488C42.0595 81.984 42.5875 80.704 43.6435 79.648C44.6995 78.56 46.0435 78.016 47.6755 78.016C49.2755 78.016 50.6195 78.56 51.7075 79.648C52.8275 80.704 53.3875 81.984 53.3875 83.488C53.3875 85.024 52.8275 86.304 51.7075 87.328C50.6195 88.352 49.2755 88.864 47.6755 88.864Z"
                  fill="#FF0000"
                />
              </svg>
            </div>
            <h2>Warning</h2>
            <h3>Are you sure you want to delete "<span>{comicToDelete.title}</span>"?</h3>
            <p>This action cannot be undone.</p>
            <div className="popupButtons" style={{ display: "flex", gap: "35px", marginTop: "15px" }}>
              <button className="confirmButton" onClick={confirmDelete}>
                Delete
              </button>
              <button className="cancelButton" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComicsList;
