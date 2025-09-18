import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/LandingPage/Header";
import IntroSection from "../components/LandingPage/IntroSection";
import GenreSection from "../components/LandingPage/GenresSection";
import LookUpAComicSection from "../components/LandingPage/LookUpAComic";
import "../styles/landingPage.css";
import TrendingComics from "../components/LandingPage/TrendingComics";
import Footer from "../components/Global/LPFooter";
import Forms from "../components/LandingPage/Forms";

function LandingPage() {
  const [showForms, setShowForms] = useState(false);
  const [defaultForm, setDefaultForm] = useState("login"); // "login" or "register"
  const [comicData, setComicData] = useState([]);

  // Open login modal
  const openLoginForm = () => {
    setDefaultForm("login");
    setShowForms(true);
  };

  // Open register modal
  const openRegisterForm = () => {
    setDefaultForm("register");
    setShowForms(true);
  };

  // Close modal
  const closeForms = () => setShowForms(false);

  const [showLogin, setShowLogin] = useState(false);
  const toggleLoginForm = () => {
    setShowLogin((prev) => !prev);
  };

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
    <div className="text-primary">
      <Header />
      {showForms && <Forms defaultForm={defaultForm} closeForms={closeForms} />}
      <IntroSection
        openLoginForm={openLoginForm}
        openRegisterForm={openRegisterForm}
      />
      <GenreSection />

      <TrendingComics comics={comicData}/>
      <LookUpAComicSection openLoginForm={openLoginForm} />
      <Footer/>
    </div>
  );
}

export default LandingPage;
