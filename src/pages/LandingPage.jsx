import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from '../components/LandingPage/Header';
import IntroSection from "../components/LandingPage/IntroSection";
import GenreSection from '../components/LandingPage/GenresSection';
import LookUpAComicSection from '../components/LandingPage/LookUpAComic';
import '../styles/landingPage.css';
import TrendingComics from "../components/LandingPage/TrendingComics";
import Footer from "../components/Global/LPFooter";
import Forms from "../components/LandingPage/Forms";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const toggleLoginForm = () => {
    setShowLogin((prev) => !prev);
  }
  const [comicData, setComicData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [searchh, setSearch] = useState("");
  
useEffect(() => {
  axios
    .get("http://localhost:3000/api/landingPage/trendingComics")
    .then((response) => {
      const data = response.data;
      console.log(data[0]);
      setComicData(data || []);
    })
    .catch((error) => {
      console.error(error.response?.data || error.message);
    });
}, []);
  
  return (
    <div>
      <Header />
      {showLogin && (
        <Forms showLogin={showLogin} toggleLoginForm={toggleLoginForm} />
      )}
      <IntroSection toggleLoginForm={toggleLoginForm} />
      <GenreSection />
      <TrendingComics comics={comicData}/>
      <LookUpAComicSection />
      <Footer/>
    </div>
     );
}


export default LandingPage;
