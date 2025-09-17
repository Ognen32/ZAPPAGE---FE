import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/AdminView.css";

function AddComicForm({
  cancelButton,
  createshowError,
  handleShowWaiting,
  stopWaitingWithSuccess,
  stopWaitingWithFailed,
}) {
  const [previewMain, setPreviewMain] = useState(null);
  const [previewSecondary, setPreviewSecondary] = useState(null);
  const [pagesZip, setPagesZip] = useState(null);
  const [description, setDescription] = useState("");
  const [shortText, setShortText] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/genres")
      .then((res) => setGenres(res.data))
      .catch((err) => console.error("Failed to fetch genres", err));
  }, []);

  const handleGenreClick = (genreName) => {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genreName)
        ? prevSelected.filter((g) => g !== genreName)
        : [...prevSelected, genreName]
    );
  };

  const handleMainCoverChange = (e) => {
    const file = e.target.files[0];
    setPreviewMain(file ? URL.createObjectURL(file) : null);
  };

  const handleSecondaryCoverChange = (e) => {
    const file = e.target.files[0];
    setPreviewSecondary(file ? URL.createObjectURL(file) : null);
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

    const title = e.target.title.value.trim();
    const author = e.target.author.value.trim();
    const releaseDate = e.target.releaseDate.value;
    const publisher = e.target.publisher.value.trim();
    const mainCoverFile = e.target.mainCover.files[0];
    const coverArtFile = e.target.secondaryCover.files[0];

    // Validations
    if (description.length < 50 || description.length > 1000) {
      createshowError("Description must be between 50 and 1000 characters!");
      return;
    }
    if (shortText.length < 50 || shortText.length > 250) {
      createshowError(
        "Short description must be between 50 and 250 characters!"
      );
      return;
    }
    if (!mainCoverFile || !coverArtFile) {
      createshowError("You must upload both cover images!");
      return;
    }
    if (!pagesZip) {
      createshowError("You must upload the comic pages as a CBZ file!");
      return;
    }

    const formData = new FormData();
    formData.append("comicZip", pagesZip);
    formData.append("mainCover", mainCoverFile);
    formData.append("coverArt", coverArtFile);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("shortDescription", shortText);
    formData.append("description", description);
    formData.append("releaseDate", releaseDate);
    formData.append("publisher", publisher);
    selectedGenres.forEach((genre) => formData.append("genre", genre));

    try {
      handleShowWaiting();
      const response = await axios.post(
        "http://localhost:3000/api/createComic",
        formData,
        {
          withCredentials: true, 
        }
      );

      console.log("Comic created:", response.data);
      stopWaitingWithSuccess();
    } catch (error) {
      console.error("Error creating comic:", error);
      createshowError("Failed to create comic. Please try again.");
      stopWaitingWithFailed();
    }
  };

  return (
    <form className="mightyForm" onSubmit={handleOnSubmit}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div className="titleDiv">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter comic title" required />
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" placeholder="Enter author name" required />
        </div>
        <div className="authorDiv">
          <label htmlFor="publisher">Publisher</label>
          <input type="text" id="publisher" name="publisher" placeholder="Marvel or DC Comics" required />
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" id="releaseDate" name="releaseDate" required />
        </div>
      </div>
      <div style={{ display: "flex", gap: "150px", marginTop: "20px" }}>
        <div>
          <label>Main Cover</label>
          <input type="file" name="mainCover" accept="image/*" onChange={handleMainCoverChange} required />
          {previewMain && <img src={previewMain} alt="Main Cover" style={{ width: "120px", height: "120px" }} />}
        </div>
        <div>
          <label>Secondary Cover</label>
          <input type="file" name="secondaryCover" accept="image/*" onChange={handleSecondaryCoverChange} required />
          {previewSecondary && <img src={previewSecondary} alt="Secondary Cover" style={{ width: "120px", height: "120px" }} />}
        </div>
        <div>
          <label>Comic Pages (CBZ)</label>
          <input type="file" name="pagesZip" accept=".cbz" onChange={handlePagesZipChange} required />
          {pagesZip && <div style={{ color: "#fff", fontWeight: "600" }}>{pagesZip.name}</div>}
        </div>
      </div>
      <div style={{ display: "flex", gap: "200px", marginTop: "20px" }}>
        <textarea
          name="shortDescription"
          placeholder="Short description (50-250 chars)"
          value={shortText}
          onChange={(e) => setShortText(e.target.value)}
          rows={4}
          className="descriptionTextarea"
          required
        />
        <textarea
          name="description"
          placeholder="Full description (50-1000 chars)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="descriptionTextarea"
          rows={4}
          required
        />
      </div>
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
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "30px" }}>
        <button type="submit" className="SubmitButton">Submit</button>
        <button type="button" className="CancelButton" onClick={cancelButton}>Cancel</button>
      </div>
    </form>
  );
}

export default AddComicForm;
