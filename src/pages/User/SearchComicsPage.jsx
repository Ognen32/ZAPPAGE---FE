import React from "react";
import UserHeader from "../../components/User/UserHeader";
import SearchResult from "../../components/User/Search/SearchResult";
import ComicSearch from "../../components/User/Search/ComicSearch";
import UserFooter from "../../components/Global/UserFooter";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function SearchComicsPage() {
  const [user, setUser] = useState({});
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search"));
  const [genre, setGenre] = useState(searchParams.get("genre") || undefined);
  const [comics, setComics] = useState([]);

 useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        let data = response.data;
        console.log(data.avatar);
        setUser(data);
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/landingPage";
      });
  }, []);

  useEffect(() => {
    const newSearch = searchParams.get("search");
    console.log(newSearch);
    const newGenres = searchParams.getAll("genre");

    setSearch(newSearch);
    setGenre(newGenres ? newGenres : undefined);

    axios
      .get("http://localhost:3000/api/search", {
        params: {
          search: newSearch,
          genre: newGenres || undefined,
        },
       withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        setComics(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching comics:", err.response.data.error);
        setSearch(undefined);
        setComics([]);
      });
  }, [searchParams]);

  const updateSearch = async () => {
    const searched = searchParams.get("search");
    setSearch(searched);
    return searched;
  };

  return (
    <div>
      <UserHeader user={user} updateSearch={updateSearch} />
      <SearchResult search={search} />
      <ComicSearch comics={comics} />
      <UserFooter />
    </div>
  );
}

export default SearchComicsPage;
