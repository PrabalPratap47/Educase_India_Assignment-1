import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account", { state: form }); // Navigate to AccountSettings
  };

  return (
    <div className="form-box2">
      <div className="login-container">
        <div className="login-left">
          <h2>Signin to your</h2>
          <h2> PopX account</h2>
          <p className="login-subtext no-margin">Lorem ipsum dolor sit amet</p>
          <p className="login-subtext no-margin">consectetur adipiscing elit.</p>
        </div>

        <form className="login-right" onSubmit={handleSubmit}>
          <div className="input-floating">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-floating">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button-primary10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
