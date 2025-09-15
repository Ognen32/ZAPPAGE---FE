import React, { useState } from "react";
import ComicsDisplay from "./ComicsDisplay";
import "../../../styles/User/ComicsDisplay.css";
import Comic1 from "../../../assets/Comic1.png";
import Comic2 from "../../../assets/Comic2.png";
import Comic3 from "../../../assets/Comic3.png";

function ComicsDisplaySection() {
  const [index, setIndex] = useState(0);

  const nextItem = () => {
    if (index < 2) setIndex(index + 1);
  };

  const prevItem = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div id="carouselBooks-outer-container">
      <div id="carouselBooks-inner-container" className="carouselFade">
        {index === 0 && (
          <ComicsDisplay
            genres={["Action", "Superhero", "Fantasy"]}
            comic={Comic1}
            author="Alyssa Wong"
            title="Psylocke #10 (2025)"
            text="In the climactic finale of Alyssa Wong's 'Psylocke' series, Kwannon faces her most personal battle yet. A mysterious assassin known as the Lady in White emerges in Japan, targeting members of the Hand. This enigmatic figure possesses Kwannon's face, leading to a haunting confrontation with her past. As the Lady in White exerts control over Kwannon, she is forced to confront her darkest fears and the painful remnants of her time as a soulless killer. The narrative delves into Kwannon's struggle for autonomy, highlighting her journey to reclaim her identity and break free from the Lady's possession. The series concludes with Kwannon's liberation, symbolizing her resilience and determination to forge her own path forward."
            slug="slug-1"
          />
        )}
        {index === 1 && (
          <ComicsDisplay
            genres={["Sci-Fi", "Comedy"]}
            comic={Comic2}
            author="Kelly Thompson"
            title="Jeff the Land Shark #3 (2025)"
            text="In this third installment of the five-issue limited series, Jeff the Land Shark finds himself in the bustling streets of Madripoor, a city known for its underworld dealings and danger. Teaming up with two of Marvel's most formidable mutants, Wolverine and Psylocke, Jeff dives into a world of claws and blades. Despite his adorable appearance and less-than-sharp intellect, Jeff proves to be a valuable ally in this high-stakes adventure. The trio faces challenges that test their skills and teamwork, all while navigating the perilous environment of Madripoor. With a blend of humor, action, and heart, this issue showcases Jeff's growth as a hero and his unique place in the Marvel Universe."
            slug="slug-2"
          />
        )}
        {index === 2 && (
          <ComicsDisplay
            genres={["Mystery", "Horror"]}
            comic={Comic3}
            author="Steve Orlando"
            title="The Vision & The Scarlet Witch #4 (2025)"
            text="In this pivotal fourth issue, Vision and Wanda Maximoff find themselves ensnared in the perilous realm known as Graverealm, facing off against the Grim Reaper in a high-stakes battle that delves deep into the essence of life and death. As the Reaper sets his ultimate trap, the duo confronts not only his lethal schemes but also the unsettling revelation of his true benefactor, challenging their perceptions of mortality and fate. With emotions running high and stakes at their peak, the issue explores themes of sacrifice, identity, and the inescapable nature of death, all set against a backdrop of intense action and magical intrigue."
            slug="slug-3"
          />
        )}

        <div className="prevNextButtons">
          <input
            type="button"
            value="❮"
            onClick={prevItem}
            disabled={index === 0}
          />
          <input
            type="button"
            value="❯"
            onClick={nextItem}
            disabled={index === 2}
          />
        </div>
      </div>
    </div>
  );
}

export default ComicsDisplaySection;
