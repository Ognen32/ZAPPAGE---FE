import React from "react";
import LoginForm from "./Login_Form.jsx";
import borderLeft from "../../assets/border-left.png";
import borderRight from "../../assets/border-right.png";

function Forms(props) {
  return (
    <div className="forms-overlay-container">
      <LoginForm toggleLoginForm={props.toggleLoginForm} />
    </div>
  );
}

export default Forms;