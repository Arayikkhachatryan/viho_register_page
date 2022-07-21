import "./LoginField.scss";

import React from "react";
import LoginForm from "../login-form/LoginForm";
import Socials from "../socials/Socials";

const LoginField = () => {
  return (
    <div id="wrapper">
      <div id="login-container">
        <div id="heading">
          <h4>Create Your Account</h4>
          <h6>Enter your personal details to create account</h6>
        </div>
        <LoginForm/>
        <Socials />
      </div>
    </div>
  );
};

export default LoginField;
