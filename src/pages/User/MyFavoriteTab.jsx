import React, { useEffect, useState } from "react";
import axios from "axios";
import UserHeader from "../../components/User/UserHeader";
import Navigator from "../../components/User/UserTabs/Navigator";
import FavoriteComicsSection from "../../components/User/UserTabs/FavoriteComicsSection";
import FireFooter from "../../components/Global/FireFooter";

function MyFavorites() {
  const [user, setUser] = useState({});
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        const data = response.data;
        console.log("User info:", data);
        setUser(data);
      })
      .catch((err) => {
        console.error(err.response?.data || err);
        window.location.href = "/landingPage";
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/favourites", { withCredentials: true })
      .then((response) => {
        const comicsOnly = response.data.map((fav) => fav.Comic);
        console.log("Favourite comics:", comicsOnly);
        setFavourites(comicsOnly);
      })
      .catch((err) => {
        console.error("Problem fetching Comics", err);
      });
  }, []);

  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <UserHeader user={user} />
      <Navigator third={true} svgSize={50} />
      <FavoriteComicsSection favourites={favourites} />
      <FireFooter />
    </div>
  );
}

export default MyFavorites;
