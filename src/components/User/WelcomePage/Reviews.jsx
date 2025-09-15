import React from "react";
import Review from "./Review";
import "../../../styles/User/Reviews.css"
import pfp1 from "../../../assets/PFP1.png"
import pfp2 from "../../../assets/PFP2.png"
import pfp3 from "../../../assets/PFP3.png"

function Reviews() {
  return (
    <section id="review">
      <div id="reviewInnerContainer">
        <h1
          style={{
            color: "#fff",
            fontSize: "3rem",
            margin: 0,
            padding: 0,
            fontWeight: 700,
            textTransform: "capitalize",
          }}
        >
          What People Think About Us
        </h1>
        <div id="reviewContainer">
          <Review
            user="Ellie Griffin"
            text={`"Finally, a place where I can read all my favorite comics without any annoying ads. The variety is amazing!"`}
            avatar={pfp1}
            stars="5"
          />
          <Review
            user="Nash Wang"
            text={`"Great selection and super easy to read on my phone. It’s like carrying a whole comic store in my pocket."`}
            avatar={pfp2}
            stars="5"
          />
          <Review
            user="Peyton Watson"
            text={`I’ve discovered so many new series here! It’s my go-to spot for both classics and hidden gems."`}
            avatar={pfp3}
            stars="5"
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
