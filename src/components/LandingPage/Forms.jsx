import React, {useState} from "react";
import LoginForm from "./Login_Form.jsx";
import RegisterForm from "./Register_Form.jsx";


function Forms({ defaultForm, closeForms }) {
  
  const [showLogin, setShowLogin] = useState(defaultForm === "login");

  const toggleForms = () => setShowLogin(!showLogin);
  return (
    <div className="forms-overlay-container">
      {showLogin ? (
        <LoginForm toggleLoginForm={toggleForms} closeModal={closeForms} />
      ) : (
        <RegisterForm toggleRegisterForm={toggleForms} closeModal={closeForms} />
      )}
    </div>
  );
  
  
}

export default Forms;