import React from "react";
import { useEffect, useState } from "react";
import IntroSection from "../components/LandingPage/IntroSection";
import GenreSection from '../components/LandingPage/GenresSection';
import '../styles/landingPage.css';
import Footer from "../components/Global/LPFooter";
import Forms from "../components/LandingPage/Forms";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const toggleLoginForm = () => {
    setShowLogin((prev) => !prev);
  };
  
  return (
    <div>
      {showLogin && (
        <Forms showLogin={showLogin} toggleLoginForm={toggleLoginForm} />
      )}
      <IntroSection toggleLoginForm={toggleLoginForm} />
      <GenreSection />
      <Footer/>
    </div>
  );
}

export default LandingPage;
