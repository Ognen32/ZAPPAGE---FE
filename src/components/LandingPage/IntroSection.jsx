import React from "react";
import Buttons from "./Buttons";
import IntroPunch from "../../assets/IntroPunch.png";
import IntroZAP from "../../assets/IntroZAP.webp";

function IntroSection({openRegisterForm,openLoginForm}) {
  return (
    <section className="intro">
      <div className="intro-outer">
        <div className="intro-info">
          <h1>
            <span className="comicCSS">ZAPPAGE</span> - The world's comics, one
            <img src={IntroZAP} alt="ZAP" width="142px" height="107" className="zap"/> away!
          </h1>
          <p>
            Welcome to ZAPPAGE, where comics come alive with just a click!
            Whether you’re into epic heroes, hilarious adventures, or
            out-of-this-world stories, our collection has something for every
            reader. All you need to do is create a free account, log in, and
            start exploring—no subscriptions, no payments, just pure comic
            magic. With ZAPPAGE, you’ll never run out of worlds to discover,
            characters to meet, or adventures to dive into. So grab your spot,
            power up your imagination, and let the stories zap you away!
          </p>
          <Buttons first="Sign Up!" second="Log In!" 
            openRegisterForm={openRegisterForm}
            openLoginForm={openLoginForm}    />
        </div>
        <img
          src={IntroPunch}
          alt="FistPunching"
          width="420"
          height="420"
          className="gets-bigger"
        />
      </div>
    </section>
  );
}

export default IntroSection;
