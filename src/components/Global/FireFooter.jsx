import react from "react";
import fire from "../../assets/fire.png";
import "../../styles/footer.css";

function FireFooter () {
    return (
        <section className="footer-section">
            <footer>
        <div className="fire-div" style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",  
                    top: "10",
                    display: "flex",
                    justifyContent: "center", 
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

export default FireFooter;