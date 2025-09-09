import React, { useEffect, useState } from "react";
import Select from "react-select";
import LightningTopLeft from "../../assets/LightningTopLeft.png";
import LightningTopRight from "../../assets/LightningTopRight.png";
import LightningBottomLeft from "../../assets/LightningBottomLeft.png";
import LightningBottomRight from "../../assets/LightningBottomRight.png";
import axios from "axios";

function LookUpAComicSection(props) {
  const [searchInput, setSearchInput] = useState(undefined);
  const [genres, setGenres] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [comicsCatalog, setComicsCatalog] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/landingPage/lookUpAComic", {
        search: searchInput,
        genre: selectedOption,
      })
      .then((res) => {
        setComicsCatalog(res.data);
        console.log(res.data);
      })
      .catch((err) => setBooksCatalog([]));
  }, [selectedOption, searchInput]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/genres")
      .then((res) => setGenres(res.data))
      .catch((err) => console.error("Failed to fetch genres", err));
  }, []);
  const genreOptions = genres.map((genre) => ({
    value: genre.genre,
    label: genre.genre,
  }));

  function handleChangeSearch(event) {
    const search = event.target.value;
    setSearchInput(search);
  }

  const handleChangeGenre = (option) => {
    if (option) {
      setSelectedOption(option.value);
      console.log("Selected:", option.value);
    } else {
      setSelectedOption(undefined);
    }
    // option.value will give you the selected value
  };

  return (
    <section className="catalog" id="catalog">
      <div className="lightning-left">
        <div className="lightning-top-left">
          <img src={LightningTopLeft} alt="left lightning" />
        </div>
        <div className="lightning-bottom-left">
          <img src={LightningBottomLeft} alt="left lightning" />
        </div>
      </div>

      <div className="catalog-center">
        <div className="lookUp">
          <h1>Look Up A Comic</h1>
          <div className="lookup-inputs">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              onChange={handleChangeSearch}
            />
            <div className="genre-dropdown">
              <Select
                options={genreOptions}
                placeholder="Categories"
                isClearable
                maxMenuHeight={200} // scrollable dropdown
                onChange={handleChangeGenre}
                styles={{
                  placeholder: (defaultStyles) => ({
                    ...defaultStyles,
                    color: " #a5a5a5",
                  }),
                  control: (base, state) => ({
                    ...base,
                    borderColor: state.isFocused ? "none" : "none",
                    border: "none", // remove all borders,
                    borderLeft: "1px solid black",
                    borderRadius: "2px",
                    boxShadow: state.isFocused ? "0 0 0 1px black`" : "none",
                    "&:hover": {
                      borderColor: state.isFocused ? "none" : "none",
                    },
                  }),
                  dropdownIndicator: (base, state) => ({
                    ...base,
                    color: state.isFocused ? "#a5a5a5" : "#000000ff", // change arrow color
                    "&:hover": {
                      color: "#000000ff", // hover color
                    },
                  }),
                  menuList: (base) => ({
                    ...base,
                     color: "#000000ff", // change arrow color
                    overflowY: "auto", // enable scrolling
                    scrollbarWidth: "none", // Firefox
                    "&::-webkit-scrollbar": {
                      display: "none", // Chrome, Safari
                    },
                  }),
                }}
              />
            </div>
          </div>
        </div>
        <div className="comics-grid">
          {comicsCatalog.map((comic, index) => (
            <div className="comic-card" key={index}>
              <img
                src={comic.coverArt}
                alt={comic.title}
                onClick={props.toggleLoginForm}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lightning-right">
        <div className="lightning-top-right">
          <img src={LightningTopRight} alt="right lightning" />
        </div>
        <div className="lightning-bottom-right">
          <img src={LightningBottomRight} alt="right lightning" />
        </div>
      </div>
    </section>
  );
}

export default LookUpAComicSection;
