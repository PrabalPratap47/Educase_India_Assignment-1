import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="form-box1">
      <h2>Welcome to PopX</h2>
      <p className="login-subtext no-margin">Lorem ipsum dolor sit amet,</p>
      <p className="login-subtext no-margin">consectetur adipiscing elit.</p>
      <button className="button-primary1" onClick={() => navigate("/register")}>
        Create Account
      </button>
      <button className="button-secondary" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}
