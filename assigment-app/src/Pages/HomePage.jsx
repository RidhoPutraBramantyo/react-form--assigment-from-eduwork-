import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/Aq3ra.mp4";
import "../css/HomePage.css"; // Impor file CSS Anda

const HomePage = () => {
  return (
    <div className="home-page">
      <center>
        <video autoPlay muted loop className="video">
          <source src={video} type="video/mp4" />
        </video>
      </center>

      <div className="content">
        <h1 className="welcome-heading">Welcome to My App</h1>
        <p className="app-description">Here you can check my Assignment</p>
        <div className="button-container">
          <Link to="/registration">
            <button className="registration-button">Registration Page</button>
          </Link>
          <Link to="/signin">
            <button className="signin-button">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Sign Up</button>
          </Link>
          <Link to="/withFormik">
            <button className="with-formik-button">withFormik</button>
          </Link>
          <Link to="/news">
            <button className="news-portal-button">News App</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
