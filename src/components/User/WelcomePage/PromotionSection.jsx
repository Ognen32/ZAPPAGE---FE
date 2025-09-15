import React from "react";
import "../../../styles/User/Promotions.css";
import comicsLeft from "../../../assets/comicsLeft.png";
import comicsRight from "../../../assets/comicsRight.png";

function Promotion() {
  return (
    <section id="messageContainer">
      <div id="messageInnerContainer">
        <img src={comicsLeft} alt="" width={249} height={332} />
        <div id="textContainerWithButton">
          <h1>The More You Read, <br/> The More Worlds You Discover</h1>
          <p>
            Love comics? We’ve got a universe waiting for you! Dive into epic
            adventures, legendary heroes, and hidden indie treasures — all
            online, anytime. Read more, explore more — with new chapters added
            every week and stories in multiple languages. Your next favorite
            comic is just a click away!
          </p>
          <input type="button" value="My Library" />
        </div>
        <img src={comicsRight} alt="" width={249} height={332} />
      </div>
    </section>
  );
}

export default Promotion;
