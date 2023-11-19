import React, { useState } from "react";
import "../../css/SignIn.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
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
    // Lakukan sesuatu dengan data masuk seperti mengirimkannya ke server.
    console.log("Data masuk:", formData);
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div>
          <label className="signin-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signin-input"
          />
        </div>
        <div>
          <label className="signin-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signin-input"
          />
        </div>
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
