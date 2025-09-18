import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminView.css";

function UpdateComicForm({ comicId, cancelButton, onSuccess, createshowError, handleShowWaiting, stopWaitingWithSuccess, stopWaitingWithFailed }) {
  const [comicData, setComicData] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [shortText, setShortText] = useState("");
  const [description, setDescription] = useState("");
  const [previewMain, setPreviewMain] = useState(null);
  const [previewSecondary, setPreviewSecondary] = useState(null);
  const [pagesZip, setPagesZip] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [comicPages, setComicPages] = useState([]);

  // 🟢 Fetch comic by ID
  useEffect(() => {
    const fetchComic = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/comics/${comicId}`);
        const data = res.data;
        setComicData(data);

        // populate fields
        setTitle(data.title || "");
        setAuthor(data.author || "");
        setPublisher(data.publisher || "");
        setReleaseDate(data.releaseDate ? data.releaseDate.split("T")[0] : "");
        setShortText(data.shortDescription || "");
        setDescription(data.description || "");
        setPreviewMain(data.mainCover || null);
        setPreviewSecondary(data.coverArt || null);
        setSelectedGenres(data.Genres ? data.Genres.map(g => g.genre) : []);
        setComicPages(data.ComicPages || []);
      } catch (err) {
        console.error("Failed to fetch comic:", err);
        createshowError("Failed to load comic data.");
      }
    };

    fetchComic();
  }, [comicId]);

  // 🟢 Fetch all genres
  useEffect(() => {
    axios.get("http://localhost:3000/api/genres")
      .then(res => setGenres(res.data))
      .catch(err => console.error("Failed to fetch genres", err));
  }, []);

  const handleGenreClick = (genreName) => {
    setSelectedGenres(prev =>
      prev.includes(genreName) ? prev.filter(g => g !== genreName) : [...prev, genreName]
    );
  };

  const handleMainCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewMain(URL.createObjectURL(file));
  };

  const handleSecondaryCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewSecondary(URL.createObjectURL(file));
  };

  const handlePagesZipChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.toLowerCase().endsWith(".cbz")) {
      setPagesZip(file);
    } else {
      setPagesZip(null);
      createshowError("Please upload a CBZ file for comic pages.");
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    createshowError("");

    if (description.length < 50 || description.length > 1000) {
      createshowError("Description must be between 50 and 1000 characters!");
      return;
    }
    if (shortText.length < 50 || shortText.length > 250) {
      createshowError("Short description must be between 50 and 250 characters!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publisher", publisher);
    formData.append("releaseDate", releaseDate);
    formData.append("shortDescription", shortText);
    formData.append("description", description);

    if (e.target.mainCover.files[0]) formData.append("mainCover", e.target.mainCover.files[0]);
    if (e.target.secondaryCover.files[0]) formData.append("coverArt", e.target.secondaryCover.files[0]);
    if (pagesZip) formData.append("comicZip", pagesZip);

    selectedGenres.forEach(g => formData.append("genre", g));

    try {
      handleShowWaiting();
      const response = await axios.patch(
        `http://localhost:3000/api/updateComic/${comicId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true }
      );
      console.log("Comic updated:", response.data);
      stopWaitingWithSuccess();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error updating comic:", err);
      createshowError("Failed to update comic.");
      stopWaitingWithFailed();
    }
  };

  if (!comicData) return <div>Loading comic...</div>;

  return (
    <form className="mightyForm" onSubmit={handleOnSubmit}>
      {/* Title / Author / Publisher / Release Date */}
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div className="titleDiv">
          <label>Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          <label>Author</label>
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
        </div>
        <div className="authorDiv">
          <label>Publisher</label>
          <input type="text" value={publisher} onChange={e => setPublisher(e.target.value)} required />
          <label>Release Date</label>
          <input type="date" value={releaseDate} onChange={e => setReleaseDate(e.target.value)} required />
        </div>
      </div>

      {/* Covers + CBZ */}
      <div style={{ display: "flex", gap: "150px", marginTop: "20px" }}>
        <div>
          <label>Main Cover</label>
          <input type="file" name="mainCover" accept="image/*" onChange={handleMainCoverChange} />
          {previewMain && <img src={previewMain} alt="Main Cover" style={{ width: "120px", height: "120px" }} />}
        </div>
        <div>
          <label>Secondary Cover</label>
          <input type="file" name="secondaryCover" accept="image/*" onChange={handleSecondaryCoverChange} />
          {previewSecondary && <img src={previewSecondary} alt="Secondary Cover" style={{ width: "120px", height: "120px" }} />}
        </div>
        <div>
          <label>Comic Pages (CBZ)</label>
          <input type="file" name="pagesZip" accept=".cbz" onChange={handlePagesZipChange} />
          {pagesZip && <div style={{ color: "#fff", fontWeight: "600" }}>{pagesZip.name}</div>}
        </div>
      </div>

      {/* Descriptions */}
      <div style={{ display: "flex", gap: "200px", marginTop: "20px" }}>
        <textarea value={shortText} onChange={e => setShortText(e.target.value)} rows={4} className="descriptionTextarea" required placeholder="Short description" />
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={4} className="descriptionTextarea" required placeholder="Full description" />
      </div>

      {/* Genres */}
      <div style={{ marginTop: "20px" }}>
        <label style={{ fontSize: "2rem", fontWeight: "700", color: "#fff" }}>Select Genres</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", marginTop: "10px" }}>
          {genres.map((genre, index) => (
            <button
              key={index}
              type="button"
              className={selectedGenres.includes(genre.genre) ? "genreButton selectedGenre" : "genreButton"}
              onClick={() => handleGenreClick(genre.genre)}
            >
              {genre.genre}
            </button>
          ))}
        </div>
      </div>

      {/* Show comic pages */}
      <div style={{ marginTop: "30px" }}>
        <div className="comicPagesContainer">
          {comicPages.map(page => (
            <img
              key={page.page}
              src={page.pageUrl}
              alt={`Page ${page.page}`}
              style={{ width: "100%", marginBottom: "10px" }}
            />
          ))}
        </div>
      </div>

      {/* Submit / Cancel */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "30px" }}>
        <button type="submit" className="SubmitButton">Update</button>
        <button type="button" className="CancelButton" onClick={cancelButton}>Cancel</button>
      </div>
    </form>
  );
}

export default UpdateComicForm;
