import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/account", { state: form }); // Pass form state to AccountSettings
  };
  


  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <div className="heading">
        <h2>Create your</h2>
        <div className="heading-space"></div>
        <h2>PopX account</h2>
      </div>

      <div className="input-floating">
        <label>
          Full Name<span className="asterisk">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-floating">
      <label>
        Phone Number<span className="asterisk">*</span>
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your Phone number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-floating">
      <label>
        Email Address<span className="asterisk">*</span>
        </label>
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
      <label>
        Password<span className="asterisk">*</span>
        </label>
        <input
          type="text"
          name="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-floating">
      <label>
        Company Name
        </label>
        <input
          type="text"
          name="company"
          placeholder="Enter your Company name"
          value={form.company}
          onChange={handleChange}
          
        />
      </div>
      <div className="input-groupp">
        <label data-required="*" className="agency-label">
          Are you an Agency?
        </label>


        <div className="radio-inline">
  <label className="custom-radio">
    <input
      type="radio"
      name="agency"
      value="yes"
      checked={form.agency === "yes"}
      onChange={handleChange}
    />
    <span className="checkmark"></span> Yes
  </label>

  <label className="custom-radio">
    <input
      type="radio"
      name="agency"
      value="no"
      checked={form.agency === "no"}
      onChange={handleChange}
    />
    <span className="checkmark"></span> No
  </label>
</div>

      </div>
    
      <button type="submit" className="button-primary">Register Account</button>
    </form>
  );
}

export default Register;
