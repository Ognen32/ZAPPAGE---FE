import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function UserSearch() {
  const [searchInput, setSearchInput] = useState(undefined);
  const [genres, setGenres] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput && searchInput.trim() !== "") {
      const queryParams = new URLSearchParams();
      queryParams.set("search", searchInput.trim());

      if (selectedOption) {
        queryParams.set("genre", selectedOption);
      }

      navigate(`/search?${queryParams.toString()}`);
      setSearchInput("");
      inputRef.current?.blur();
    }
  };
  return (
    <div id="userSearch-container">
      <svg
        onClick={handleSubmit}
        style={{ paddingRight: "3px", cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
      >
        <path
          d="M3.54608 10.3826C4.71338 13.3979 7.86561 14.8762 10.5179 13.8495C13.1702 12.8227 14.5052 9.6071 13.3379 6.59188C12.1706 3.57665 9.01839 2.09827 6.36611 3.12506C3.71382 4.15185 2.37878 7.36742 3.54608 10.3826Z"
          fill="#fff"
          stroke="#303030"
          strokeWidth="1.5"
        />
        <line
          y1="-1"
          x2="8.60233"
          y2="-1"
          transform="matrix(0.728709 0.684824 0.684824 -0.728709 13.2253 12.5332)"
          stroke="#303030"
          strokeWidth="1.5"
        />
      </svg>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="userSearch-input"
          value={searchInput || ""}
          onChange={handleChangeSearch}
        />
      </form>
      <div className="userSeach-Genre">
        <Select
          options={genreOptions}
          placeholder="Categories"
          isClearable
          maxMenuHeight={250} // scrollable dropdown
          onChange={handleChangeGenre}
          styles={{
            control: (base, state) => ({
              ...base,
              borderColor: state.isFocused ? "none" : "none",
              borderLeft: "2px solid black",
              borderTopLeftRadius: "1px",
              borderBottomLeftRadius: "1px",
              borderTopRightRadius: "11px",
              borderBottomRightRadius: "11px",
              boxShadow: state.isFocused ? "0 0 0 1px black`" : "none",
              "&:hover": {
                borderColor: state.isFocused ? "none" : "none",
              },
            }),
            dropdownIndicator: (base, state) => ({
              ...base,
              color: state.isFocused ? "#a5a5a5" : "#303030", // change arrow color
              "&:hover": {
                color: "#303030", // hover color
              },
            }),
            menuList: (base) => ({
              ...base,
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
  );
}

export default UserSearch;
