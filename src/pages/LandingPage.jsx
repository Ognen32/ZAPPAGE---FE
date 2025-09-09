import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import IntroSection from "../components/LandingPage/IntroSection";
import GenreSection from '../components/LandingPage/GenresSection';
import LookUpAComicSection from '../components/LandingPage/LookUpAComic';
import '../styles/landingPage.css';
import TrendingComics from "../components/LandingPage/TrendingComics";

function LandingPage() {
const [comicData, setComicData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [searchh, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false);

 /*
useEffect(() => {
  axios
    .get("http://localhost:3000/api/landingPage/trendingComics")
    .then((response) => {
      const data = response.data;
      console.log(data[0]);
      setComicData(data);
      setShouldFetch(false); 
    })
    .catch((error) => {
      console.error(error.response?.data || error.message);
      setShouldFetch(false); 
    });
}, [shouldFetch]);
*/

  //const toggleLoginForm = () => {
  //  setShowLogin((prev) => !prev);
  //};
  

  return (
    <div>
      <IntroSection />
      <GenreSection />
     <LookUpAComicSection />
    </div>
  );
}


// <TrendingComics comics={comicData}/> 


export default LandingPage;
