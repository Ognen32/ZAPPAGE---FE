import React, { useState } from "react";
import LineFooter from "./LineFooter";
import "../../styles/footer.css";
import phone from "../../assets/phoneNumber 2.png";
import mail from "../../assets/mail 2.png";
import facebook from "../../assets/facebook 1.png";
import insta from "../../assets/instagram 1.png";
import twit from "../../assets/twitter 1.png";
import fire from "../../assets/fire.png";
import Forms from "../../components/LandingPage/Forms.jsx";


function Footer(props){

   const [showLogin, setShowLogin] = useState(false);

    return (
         <section className="footer-section">
      <footer
        id="contact"
        style={{ backgroundColor: "#a5a5a5", 
                position: "relative",
                paddingBottom: "150px",  }}
      >
        <div className="info-footer">
          <div className="left-card">
            <h2  style={{ 
                  fontFamily: "'Bangers', cursive", 
                  fontSize: "36px",
                  color: "#000",
                }}
             >
                ZAPPAGE</h2>
            <div className="text-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Find what you like
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Over 20,000+ books
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Make an account
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Join our 10,000+ members
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Start Reading
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  With saved reading progress
                </p>
              </div>
            </div>
          </div>
          <LineFooter />
          <div className="center-card">
            <h2  style={{ 
                  fontFamily: "'Bangers', cursive", 
                  fontSize: "36px",
                  color: "#000",
                }}
             >
                Contact Us</h2>
                
            <div className="text-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "46.364px",
                  gap: "20px",
                }}
              >
                <img src={phone} />
                <p
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  +389 77 998 233
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "46.364px",
                  gap: "20px",
                }}
              >
                <img src={mail} />
                <p
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  zappage@gmail.com
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: "100%",
                  height: "46.364px",
                  gap: "20px",
                }}
              >
                <img src={facebook} />
                <img src={insta} />
                <img src={twit} />
              </div>
            </div>
          </div>
          <LineFooter />
          <div className="right-card">
            <h2 style={{ 
                  fontFamily: "'Bangers', cursive", 
                  fontSize: "36px",
                  color: "#000",
                }}
             >
                Quick Links</h2>

            <div className="text-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  gap: "9px",
                }}
              >
                <a
                  href="#home"
                  style={{
                    fontSize: "24px",
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    textDecoration: "none",
                  }}
                >
                  Home
                </a>
                <a
                  href="#trending"
                  style={{
                    fontSize: "24px",
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    textDecoration: "none",
                  }}
                >
                  Trending
                </a>
                <a
                  href="#catalog"
                  style={{
                    fontSize: "24px",
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    textDecoration: "none",
                  }}
                >
                  Catalog
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                  e.preventDefault();      // stop the page from jumping
                  setShowLogin(true);      // show login form
                  }}
                  style={{
                    fontSize: "24px",
                    color: "#000000",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    textDecoration: "none",
                  }}
                >
                  My Account
                </a>
                
                {/* Show login form only when showLogin = true */}
                {showLogin && <Forms toggleLoginForm={() => setShowLogin(false)} />}
              </div>
            </div>
          </div>
        </div>
        
        <div className="fire-div" style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",  
            top: "10",
            display: "flex",
            justifyContent: "center", // or "space-between" if you want them spread out
            alignItems: "flex-end",
            width: "100%",
            pointerEvents: "none",
            overflow: "hidden"
        }}>
             <img src={fire}  style={{ width: "25%", height: "auto"} } />
             <img src={fire} style={{ width: "25%", height: "auto"} }/>
             <img src={fire} style={{ width: "25%", height: "auto"} }/>
             <img src={fire} style={{ width: "25%", height: "auto"} }/>
            
             
        </div>  


    
      </footer>
      <div className="copyRight">
        <span>@2025 All rights reserved</span>
      </div>
    </section>
  );
}


export default Footer;