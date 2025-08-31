import React from "react";
import Marquee from "react-fast-marquee";
import Genre from "./Genre";
import superhero from "../../assets/SuperheroGenre.png";
import scifi from "../../assets/ScifiGenre.png";
import horror from "../../assets/HorrorGenre.webp";
import fantasy from "../../assets/FantasyGenre.png";
import mystery from "../../assets/MysteryGenre.png";
import action from "../../assets/ActionGenre.png";
import comedy from "../../assets/ComedyGenre.png";

function GenresSection() {
  return (
    <div className="genres">
      <h2>Genres</h2>
      <Marquee
        speed={50}
        pauseOnHover
        gradient={true}
        className="marquee"
        delay="0.2"
      >
        <Genre item={superhero} alt="superhero" name="Superhero" />
        <Genre item={scifi} alt='sci-fi' name='Sci-Fi' />
        <Genre item={horror} alt='horror' name='Horror' />
        <Genre item={fantasy} alt='fantasy' name='Fantasy' />
        <Genre item={mystery} alt='mystery' name='Mystery' />
        <Genre item={action} alt='action' name='Action' />
        <Genre item={comedy} alt='comedy' name='Comedy' />
      </Marquee>
    </div>
  );
}

export default GenresSection;
