import React from "react";
import { useEffect, useState } from "react";
import IntroSection from "../components/LandingPage/IntroSection";
import GenreSection from '../components/LandingPage/GenresSection';
import '../styles/landingPage.css';

function LandingPage() {
  return (
    <div>
      <IntroSection />
      <GenreSection />
    </div>
  );
}

export default LandingPage;
