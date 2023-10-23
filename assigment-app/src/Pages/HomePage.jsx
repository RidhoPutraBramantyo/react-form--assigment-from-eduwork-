import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css"; // Impor file CSS Anda

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="welcome-heading">Welcome to My App</h1>
      <p className="app-description">Here you can check my Assignment</p>
      <div className="button-container">
        <Link to="/registration">
          <button className="registration-button">Registration Page</button>
        </Link>
        <Link to="/signin">
          <button className="signin-button">Sign In</button>
        </Link>{" "}
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
        <Link to="/withFormik">
          <button className="with-formik-button">withFormik</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
