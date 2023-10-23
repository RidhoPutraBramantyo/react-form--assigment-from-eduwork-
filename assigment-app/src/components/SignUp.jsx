import React, { useState } from "react";
import "../css/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data pendaftaran seperti mengirimkannya ke server.
    console.log("Data pendaftaran:", formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label className="signup-label">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
          />
        </div>
        <div>
          <label className="signup-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />
        </div>
        <div>
          <label className="signup-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
