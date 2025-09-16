import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import "../../styles/AdminView.css";

function AddBookForm({
  cancelButton,
  createshowError,
  errorMessage,
  handleShowWaiting,
  stopWaitingWithSuccess,
  stopWaitingWithFailed,
}) {
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
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

  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    if (file) setPreview1(URL.createObjectURL(file));
    else setPreview1(null);
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) setPreview2(URL.createObjectURL(file));
    else setPreview2(null);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    createshowError(""); // clear previous errors

    const formData = new FormData();

    const title = e.target.title.value.trim();
    const author = e.target.author.value.trim();
    const releaseDate = new Date(e.target.releaseDate.value);
    const publisher = e.target.publisher.value.trim();
    const shortDescription = e.target.shortDescription.value.trim();
    const descriptionText = e.target.description.value.trim();
    const mainCover = e.target.mainCover.files[0];
    const coverArt = e.target.coverArt.files[0];
    const pagesZip = e.target.pagesZip.files[0];

    const today = new Date();

    // === Validation ===
    if (descriptionText.length < 50 || descriptionText.length > 1000) {
      createshowError("Description must be between 50 and 1000 characters!");
      return;
    }
    if (shortDescription.length < 50 || shortDescription.length > 250) {
      createshowError(
        "Short description must be between 50 and 250 characters!"
      );
      return;
    }
    if (releaseDate >= today) {
      createshowError("Release date must be earlier than today!");
      return;
    }
    if (!mainCover || !coverArt) {
      createshowError("You must upload both cover images!");
      return;
    }
    if (!pagesZip) {
      createshowError("You must upload the comic pages as a ZIP file!");
      return;
    }

    // === Append to FormData ===
    formData.append("title", title);
    formData.append("author", author);
    formData.append("releaseDate", e.target.releaseDate.value);
    formData.append("publisher", publisher);
    formData.append("shortDescription", shortDescription);
    formData.append("description", descriptionText);
    formData.append("mainCover", mainCover);
    formData.append("coverArt", coverArt);
    formData.append("pagesZip", pagesZip);

    selectedGenres.forEach((genre) => formData.append("genre", genre));

    try {
      handleShowWaiting();
      const response = await axios.post(
        "http://localhost:3000/api/createComic",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
      {/* Title and Author */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="titleDiv">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter comic title"
            required
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author name"
            required
          />
        </div>

        {/* Publisher and Release Date */}
        <div className="authorDiv">
          <label htmlFor="publisher">Publisher</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            placeholder="Marvel or DC Comics"
            required
          />
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" id="releaseDate" name="releaseDate" required />
        </div>
      </div>

      {/* Cover Images */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>
          <label>Main Cover</label>
          <input
            type="file"
            name="mainCover"
            accept="image/*"
            onChange={handleFileChange1}
            required
          />
          {preview1 && (
            <img
              src={preview1}
              alt="Preview Main Cover"
              style={{ width: "120px", height: "120px" }}
            />
          )}
        </div>
        <div>
          <label>Secondary Cover</label>
          <input
            type="file"
            name="coverArt"
            accept="image/*"
            onChange={handleFileChange2}
            required
          />
          {preview2 && (
            <img
              src={preview2}
              alt="Preview Cover Art"
              style={{ width: "120px", height: "120px" }}
            />
          )}
        </div>
      </div>

      {/* Pages ZIP Upload */}
      <div style={{ marginTop: "20px" }}>
        <label>Comic Pages (ZIP)</label>
        <input type="file" name="pagesZip" accept=".zip" required />
      </div>

      {/* Description */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <textarea
          name="shortDescription"
          placeholder="Short description (50-250 chars)"
          value={shortText}
          onChange={(e) => setShortText(e.target.value)}
          rows={4}
          required
        />
        <textarea
          name="description"
          placeholder="Full description (50-1000 chars)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={7}
          required
        />
      </div>

      {/* Genres */}
      <div style={{ marginTop: "20px" }}>
        <label>Select Genres</label>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={4}
        >
          {genres.map((genre, index) => (
            <SwiperSlide key={index}>
              <input
                type="button"
                value={genre.genre}
                className={
                  selectedGenres.includes(genre.genre)
                    ? "genreButton selectedGenre"
                    : "genreButton"
                }
                onClick={() => handleGenreClick(genre.genre)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Submit / Cancel Buttons */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <button type="submit" className="SubmitButton">
          Submit
        </button>
        <button type="button" className="CancelButton" onClick={cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddBookForm;
