import React from "react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import UserHeader from "../../components/User/UserHeader";
import ComicDetailsContainer from "../../components/User/ComicView/ComicDetailsContainer";
import UserFooter from "../../components/Global/UserFooter";



function ComicView() {
  const [user, setUser] = useState({});
  const [comicData, setComic] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/userInfo", { withCredentials: true })
      .then((response) => {
        let data = response.data;
        setUser(data);
      })
      .catch((err) => {
        console.error(err.response.data);
        window.location.href = "/landingPage";
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/comic/${slug}`, {
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        setComic(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);


  return (
    <div style={{ maxWidth: "100%", position: "relative" }}>
      <UserHeader user={user}  />
      <ComicDetailsContainer
        comic={comicData}
        user={user}
      />
      <UserFooter />
    </div>
  );
}

export default ComicView;
